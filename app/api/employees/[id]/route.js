import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Employee from "@/models/Employee"

// GET single employee
export async function GET(request, { params }) {
  try {
    await connectDB()
    const employee = await Employee.findById(params.id)
    if (!employee) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: employee })
  } catch (error) {
    console.error("[v0] Error fetching employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PUT update employee
export async function PUT(request, { params }) {
  try {
    await connectDB()
    const body = await request.json()
    const employee = await Employee.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    })
    if (!employee) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: employee })
  } catch (error) {
    console.error("[v0] Error updating employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

// DELETE employee
export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const employee = await Employee.findByIdAndDelete(params.id)
    if (!employee) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("[v0] Error deleting employee:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
