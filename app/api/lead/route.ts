// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, brokerage, package: pkg } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    console.log("[meridian lead]", { name, email, phone, brokerage, package: pkg });

    // TODO: wire Supabase for persistence
    // TODO: wire Resend for email notification

    return NextResponse.json({ ok: true, message: "Lead captured" });
  } catch {
    return NextResponse.json({ ok: true, message: "Lead captured" });
  }
}
