import { loginService } from "@/lib/services/login";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  try {
    const response = await loginService(res);
    const session = request.session;
    console.log("faqih", session);
    return NextResponse.json({
      success: true,
      message: "Berhasil login",
      data: response.user,
    });
  } catch (error) {
    console.log("error", error.response);
    const e = error.toString();
    // if (error?.response) {
    //   return res.status(500).json(error.response.data);
    // }
    return NextResponse.json({
      message: error,
    });
  }
}
