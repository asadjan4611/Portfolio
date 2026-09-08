import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 10_000) {
      return NextResponse.json({ message: "Your message is too large." }, { status: 413 });
    }

    const { name, email, company, message, website } = await request.json();

    // Bots commonly fill this hidden field. Return success without sending anything.
    if (website) return NextResponse.json({ message: "Message sent successfully." });

    const cleanName = name?.trim().replace(/[\r\n]/g, " ");
    const cleanEmail = email?.trim();
    const cleanCompany = company?.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || !emailPattern.test(cleanEmail || "") || !cleanMessage) {
      return NextResponse.json(
        { message: "Please provide your name, a valid email, and a message." },
        { status: 400 },
      );
    }

    if (cleanName.length > 100 || cleanEmail.length > 254 || cleanCompany?.length > 120 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { message: "One or more fields are longer than allowed." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { message: "The contact service is not configured yet. Please reach out on LinkedIn." },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: cleanEmail,
        subject: `Portfolio enquiry from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany || "Not provided"}\n\nMessage:\n${cleanMessage}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error("Email provider rejected the request");
    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Unable to send your message right now. Please reach out on LinkedIn." },
      { status: 500 },
    );
  }
}
