import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "HubSpot not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { name, email, company, phone, industry, challenge, package: pkg } = body;

  // Split name into first/last
  const nameParts = (name || "").trim().split(/\s+/);
  const firstname = nameParts[0] || "";
  const lastname = nameParts.slice(1).join(" ") || "";

  const properties: Record<string, string> = {
    email,
    firstname,
    lastname,
    company,
    phone: phone || "",
    industry: industry || "",
    hs_lead_status: "NEW",
  };

  // Store package and challenge in a note via the contact's properties
  // We'll use the "message" field if available, otherwise notes_last_contacted
  if (pkg) {
    properties.jobtitle = `${pkg} Package Inquiry`;
  }

  try {
    // First try to create the contact
    const createRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (createRes.ok) {
      const contact = await createRes.json();

      // Create a note with the challenge info if provided
      if (challenge) {
        await createNote(token, contact.id, pkg, challenge);
      }

      return NextResponse.json({ success: true, contactId: contact.id });
    }

    // If contact already exists (409), update instead
    if (createRes.status === 409) {
      const updateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (updateRes.ok) {
        const contact = await updateRes.json();

        if (challenge) {
          await createNote(token, contact.id, pkg, challenge);
        }

        return NextResponse.json({ success: true, contactId: contact.id });
      }

      const updateErr = await updateRes.text();
      console.error("HubSpot update error:", updateErr);
      return NextResponse.json({ error: "Failed to update contact" }, { status: 500 });
    }

    const createErr = await createRes.text();
    console.error("HubSpot create error:", createErr);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 });
  } catch (err) {
    console.error("HubSpot API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

async function createNote(
  token: string,
  contactId: string,
  pkg: string,
  challenge: string
) {
  try {
    // Create engagement note
    const noteBody = `Package Interest: ${pkg}\n\nBiggest Content Challenge:\n${challenge}`;

    const noteRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/notes",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            hs_timestamp: new Date().toISOString(),
            hs_note_body: noteBody,
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 202,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!noteRes.ok) {
      const err = await noteRes.text();
      console.error("HubSpot note error:", err);
    }
  } catch (err) {
    console.error("HubSpot note error:", err);
  }
}
