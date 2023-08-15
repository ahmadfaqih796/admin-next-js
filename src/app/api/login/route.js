import { loginService } from "@/lib/services/login";
import { withSessionRoute } from "@/lib/sessions/withSession";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  try {
    const response = await loginService(res);
    //  const { job_level, role_id, is_leader } = response.user;
    //  console.log("hahahah", response.user);

    //  await response.user.save();
    return NextResponse.json({
      success: true,
      message: "Berhasil login",
      data: response.user,
    });
  } catch (error) {
    console.log("errjjj", error);
    const e = error.toString();
    if (error?.response) {
      return res.status(500).json(error.response.data);
    }
    return res.status(400).json({
      message: e,
    });
  }
}
