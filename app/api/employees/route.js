import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Employee from "@/models/Employee"

// GET all employees
export async function GET() {
  try {
    await connectDB()
    const employees = await Employee.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: employees })
  } catch (error) {
    console.error("[v0] Error fetching employees:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// POST create new employee
export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const employee = await Employee.create(body)
    return NextResponse.json({ success: true, data: employee }, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// PUT update employee
export async function PUT(request) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ success: false, error: "Employee ID is required" }, { status: 400 })
    }

    const body = await request.json()
    const employee = await Employee.findByIdAndUpdate(id, body, { new: true, runValidators: true })

    if (!employee) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: employee })
  } catch (error) {
    console.error("[v0] Error updating employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// DELETE remove employee
export async function DELETE(request) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ success: false, error: "Employee ID is required" }, { status: 400 })
    }

    const employee = await Employee.findByIdAndDelete(id)

    if (!employee) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("[v0] Error deleting employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}
