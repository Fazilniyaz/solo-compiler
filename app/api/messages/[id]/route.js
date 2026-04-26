import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

// GET single message
export async function GET(request, { params }) {
  try {
    await connectDB();
    const message = await Message.findById(params.id);
    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    console.error("[v0] Error fetching message:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// DELETE message
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const message = await Message.findByIdAndDelete(params.id);
    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error("[v0] Error deleting message:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
