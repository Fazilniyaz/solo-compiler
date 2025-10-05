import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Client from "@/models/Client"

// GET all clients
export async function GET() {
  try {
    await connectDB()
    const clients = await Client.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: clients })
  } catch (error) {
    console.error("[v0] Error fetching clients:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST create new client
export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const client = await Client.create(body)
    return NextResponse.json({ success: true, data: client }, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating client:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}
