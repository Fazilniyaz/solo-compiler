import { NextResponse } from "next/server"
import { verifyCredentials, generateToken } from "@/lib/auth"

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    if (verifyCredentials(username, password)) {
      const token = generateToken(username)

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
      })

      // Set HTTP-only cookie
      response.cookies.set("admin-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 86400, // 24 hours
      })

      return response
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Login failed" }, { status: 500 })
  }
}
