import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Client from "@/models/Client"

// GET single client
export async function GET(request, { params }) {
  try {
    await connectDB()
    const client = await Client.findById(params.id)
    if (!client) {
      return NextResponse.json({ success: false, error: "Client not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: client })
  } catch (error) {
    console.error("[v0] Error fetching client:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PUT update client
export async function PUT(request, { params }) {
  try {
    await connectDB()
    const body = await request.json()
    const client = await Client.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    })
    if (!client) {
      return NextResponse.json({ success: false, error: "Client not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: client })
  } catch (error) {
    console.error("[v0] Error updating client:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// DELETE client
export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const client = await Client.findByIdAndDelete(params.id)
    if (!client) {
      return NextResponse.json({ success: false, error: "Client not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("[v0] Error deleting client:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
