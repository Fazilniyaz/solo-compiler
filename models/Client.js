import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    logo: {
      type: String, // URL to the uploaded logo
      required: false,
    },
    summary: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: false,
    },
    solution: {
      type: String,
      required: false,
    },
    techStack: {
      type: String,
      required: false,
    },
    outcome: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Client || mongoose.model("Client", ClientSchema)
