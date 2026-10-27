import { isMailConfigured, mailCc, mailUser, transporter } from "@/nodemailer/config";
import {
  budgetOptions,
  emailPattern,
  fieldLimits,
  serviceOptions,
  timelineOptions,
} from "@/utils/enquiry";
import { NextResponse, type NextRequest } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill this in.
  if (field(formData, "company_url")) {
    return NextResponse.json({ message: "Thank you." }, { status: 200 });
  }

  const enquiry = {
    name: field(formData, "user_name"),
    business: field(formData, "user_business"),
    email: field(formData, "user_email"),
    website: field(formData, "user_website"),
    service: field(formData, "user_service"),
    budget: field(formData, "user_budget"),
    timeline: field(formData, "user_timeline"),
    message: field(formData, "user_message"),
    references: field(formData, "user_references"),
  };

  const errors: string[] = [];
  if (!enquiry.name) errors.push("Name is required.");
  if (!enquiry.business) errors.push("Business or brand is required.");
  if (!emailPattern.test(enquiry.email)) errors.push("A valid email is required.");
  if (!serviceOptions.includes(enquiry.service)) errors.push("Please choose a service.");
  if (!budgetOptions.includes(enquiry.budget)) errors.push("Please choose a budget range.");
  if (!timelineOptions.includes(enquiry.timeline)) errors.push("Please choose a timeline.");
  if (!enquiry.message) errors.push("Project description is required.");

  (Object.keys(fieldLimits) as (keyof typeof fieldLimits)[]).forEach((key) => {
    if (enquiry[key].length > fieldLimits[key]) errors.push(`The ${key} field is too long.`);
  });

  if (errors.length) {
    return NextResponse.json({ message: errors[0], errors }, { status: 400 });
  }

  if (!isMailConfigured) {
    console.error("[contact] Email delivery is not configured (CONTACT_EMAIL / CONTACT_EMAIL_PASSWORD).");
    return NextResponse.json(
      { message: "Enquiries cannot be sent right now. Please try again later." },
      { status: 503 }
    );
  }

  const rows = [
    ["Name", enquiry.name],
    ["Business / brand", enquiry.business],
    ["Email", enquiry.email],
    ["Website / social", enquiry.website || "—"],
    ["Service", enquiry.service],
    ["Budget", enquiry.budget],
    ["Timeline", enquiry.timeline],
    ["Project description", enquiry.message],
    ["References", enquiry.references || "—"],
  ];

  try {
    await transporter.sendMail({
      from: mailUser,
      to: mailUser,
      cc: mailCc,
      replyTo: enquiry.email,
      subject: `New project enquiry: ${enquiry.business.slice(0, 80)} (${enquiry.service})`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      // Email clients need inline styles and table markup.
      html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;">${rows
        .map(
          ([label, value]) =>
            `<tr><td style="vertical-align:top;font-weight:bold;">${escapeHtml(label)}</td><td style="white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`
        )
        .join("")}</table>`,
    });

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent." });
  } catch (err) {
    console.error("[contact] Failed to send enquiry:", err);
    return NextResponse.json(
      { message: "Your enquiry could not be sent. Please try again shortly." },
      { status: 502 }
    );
  }
}
