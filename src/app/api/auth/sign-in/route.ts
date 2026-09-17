import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const disabled = {
  ok: false,
  error: "Authentication is not enabled. This site does not use a database.",
};

export async function GET() {
  return NextResponse.json(disabled, { status: 501 });
}

export async function POST() {
  return NextResponse.json(disabled, { status: 501 });
}
