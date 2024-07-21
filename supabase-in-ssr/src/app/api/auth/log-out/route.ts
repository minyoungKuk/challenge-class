import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function DELETE() {
  const supabase = createClient();

  // 로그인 유저 쿠키 사게
  await supabase.auth.signOut();

  return NextResponse.json("");
}
