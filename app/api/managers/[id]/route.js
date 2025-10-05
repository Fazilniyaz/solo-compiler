import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Manager from "@/models/Manager"

// GET single manager
export async function GET(request, { params }) {
  try {
    await connectDB()
    const manager = await Manager.findById(params.id)
    if (!manager) {
      return NextResponse.json({ success: false, error: "Manager not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: manager })
  } catch (error) {
    console.error("[v0] Error fetching manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PUT update manager
export async function PUT(request, { params }) {
  try {
    await connectDB()
    const body = await request.json()
    const manager = await Manager.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    })
    if (!manager) {
      return NextResponse.json({ success: false, error: "Manager not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: manager })
  } catch (error) {
    console.error("[v0] Error updating manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// DELETE manager
export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const manager = await Manager.findByIdAndDelete(params.id)
    if (!manager) {
      return NextResponse.json({ success: false, error: "Manager not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("[v0] Error deleting manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
