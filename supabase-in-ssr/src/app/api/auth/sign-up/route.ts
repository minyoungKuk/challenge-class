import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const email = data.email as string;
  const password = data.password as string;

  console.log("Foo bar", data);

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.signUp({ email, password });

  return NextResponse.json(user);
}
