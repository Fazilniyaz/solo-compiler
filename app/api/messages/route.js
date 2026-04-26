import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

// GET all messages
export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("[v0] Error fetching messages:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// POST create new message
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const payload = {
      email: body.email,
      phone_number: body.phone_number,
      message: body.message,
    };

    const savedMessage = await Message.create(payload);
    return NextResponse.json(
      { success: true, data: savedMessage },
      { status: 201 },
    );
  } catch (error) {
    console.error("[v0] Error creating message:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
