import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("New Message:", { name, email, message });

  return NextResponse.json({ success: true });
}
export async function GET() {
  return NextResponse.json({ message: "Contact page" });
}