import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Manager from "@/models/Manager"

// GET all managers
export async function GET() {
  try {
    await connectDB()
    const managers = await Manager.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: managers })
  } catch (error) {
    console.error("[v0] Error fetching managers:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST create new manager
export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const manager = await Manager.create(body)
    return NextResponse.json({ success: true, data: manager }, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// PUT update manager
export async function PUT(request) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ success: false, error: "Manager ID is required" }, { status: 400 })
    }

    const body = await request.json()
    const manager = await Manager.findByIdAndUpdate(id, body, { new: true, runValidators: true })

    if (!manager) {
      return NextResponse.json({ success: false, error: "Manager not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: manager })
  } catch (error) {
    console.error("[v0] Error updating manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// DELETE remove manager
export async function DELETE(request) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ success: false, error: "Manager ID is required" }, { status: 400 })
    }

    const manager = await Manager.findByIdAndDelete(id)

    if (!manager) {
      return NextResponse.json({ success: false, error: "Manager not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("[v0] Error deleting manager:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}
