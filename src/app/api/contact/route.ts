import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/templates/email-template";
import { QuoteFormInput } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();

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
    form[typedKey] = value as string;
  });

  // @ts-ignore
  const { data, error } = await resend.emails.send({
    from: "Sonaqode <notif@sonaqode.co.uk>",
    to: ["dragonbrian33@gmail.com", "info@sonaqode.co.uk"],
    subject: `Sonaqode Contact Enquiry - ${form.subject}`,
    react: EmailTemplate({
      name: form.name,
      content: form.description,
      phone: form.phone,
      email: form.email,
      companyName: form.companyName,
    }),
  });

  if (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
