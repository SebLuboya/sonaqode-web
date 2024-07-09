import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/templates/email-template";
import { QuoteFormInput } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file: File | null = formData.get("file") as unknown as File;

  let attachments: any[] = [];

  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    attachments = [
      {
        filename: file.name,
        content: buffer,
      },
    ];
  }

  let form: QuoteFormInput = {
    name: "",
    companyName: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  };
  formData.forEach((value, key) => {
    const typedKey = key as keyof QuoteFormInput;
    if (key === "file") return;
    form[typedKey] = value as string;
  });

  console.log(form);

  // @ts-ignore
  const { data, error } = await resend.emails.send({
    from: "CozyBrian <email@info.briannewton.dev>",
    to: ["dragonbrian33@gmail.com"],
    subject: `Sonaqode Quote Enquiry - ${form.subject}`,
    react: EmailTemplate({
      name: form.name,
      content: form.description,
      phone: form.phone,
      email: form.email,
      companyName: form.companyName,
    }),
    attachments: [...attachments],
  });

  if (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
