import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body as ContactBody;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email and message are required." });
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.CONTACT_TO_EMAIL || "Info@udevelopers.com"],
      replyTo: email,
      subject: subject
        ? `[UDI Contact] ${subject}`
        : `[UDI Contact] New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(400).json({ error: error.message });
      return;
    }

    res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
