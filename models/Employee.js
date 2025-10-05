import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: false,
    },
    role: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema)
