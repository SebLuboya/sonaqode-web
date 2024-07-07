import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const data: any = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  // const file: File | null = formData.get("file") as unknown as File;
  // const toPath: string = formData.get("path") as string;
  return NextResponse.json({ success: "yes" }, { status: 200 });
}
