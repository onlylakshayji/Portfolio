// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";
// import { z } from "zod";

// // ---------------- RATE LIMIT ----------------
// const RATE_LIMIT_WINDOW = 60_000; // 1 minute
// const MAX_REQUESTS = 3;

// const ipStore = new Map<string, { count: number; time: number }>();

// function rateLimit(ip: string) {
//   const now = Date.now();
//   const record = ipStore.get(ip);

//   if (!record) {
//     ipStore.set(ip, { count: 1, time: now });
//     return false;
//   }

//   if (now - record.time > RATE_LIMIT_WINDOW) {
//     ipStore.set(ip, { count: 1, time: now });
//     return false;
//   }

//   record.count += 1;

//   return record.count > MAX_REQUESTS;
// }

// // ---------------- VALIDATION ----------------
// const contactSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   message: z.string().min(3,"Message is too short"),
//   company: z.string().optional(), // honeypot
// });

// export async function POST(req: Request) {
//   try {
//     const ip =
//       req.headers.get("x-forwarded-for")?.split(",")[0] ||
//       "unknown-ip";

//     // 🚦 Rate limit check
//     if (rateLimit(ip)) {
//       return NextResponse.json(
//         { error: "Too many requests. Try again later." },
//         { status: 429 }
//       );
//     }

//     const body = await req.json();

//     // 🛑 Honeypot (bot trap)
//     if (body.company) {
//       return NextResponse.json({ success: true });
//     }

//     const { name, email, message } = contactSchema.parse(body);

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `New message from ${name}`,
//       html: `
//         <h3>New Contact Message</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("Email error:", err);
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }



import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

// ---------------- RATE LIMIT ----------------
const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 3;

const ipStore = new Map<string, { count: number; time: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, time: now });
    return false;
  }

  if (now - record.time > RATE_LIMIT_WINDOW) {
    ipStore.set(ip, { count: 1, time: now });
    return false;
  }

  record.count += 1;
  return record.count > MAX_REQUESTS;
}

// ---------------- VALIDATION ----------------
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(3, "Message is too short (min 3 characters)"),
  company: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown-ip";

    // 🚦 Rate limit
    if (rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    let body;

    // 🧱 Invalid JSON protection
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // 🕵️ Honeypot
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    // ✅ Zod validation
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid input";

      return NextResponse.json(
        { error: firstError },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // ---------------- EMAIL ----------------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("EMAIL SEND ERROR:", err);

    return NextResponse.json(
      { error: "Could not send email. Please try again later." },
      { status: 500 }
    );
  }
}
