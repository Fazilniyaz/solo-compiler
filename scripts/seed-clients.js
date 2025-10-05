// This script seeds the database with initial client data
const mongoose = require("mongoose")

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://solocompiler:ashashfaz@solocompiler.cvks56p.mongodb.net/?retryWrites=true&w=majority&appName=solocompiler"

const clientSchema = new mongoose.Schema({
  clientName: String,
  from: Date,
  to: Date,
  logo: String,
  summary: String,
  problem: String,
  solution: String,
  techStack: [String],
  outcome: String,
})

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema)

const seedClients = [
  {
    clientName: "Saliheen Perfumes",
    from: new Date("2023-01-01"),
    to: new Date("2024-01-01"),
    logo: "/perfume-bottle-logo.jpg",
    problem: "Previously selling only offline with no digital presence",
    solution:
      "Built full eCommerce website with client and admin dashboards, complete authentication system with OTP verification",
    techStack: ["React", "Node.js", "Express.js", "JWT", "OTP", "Redux", "MongoDB", "AWS", "Razorpay"],
    outcome:
      "Online sales boosted significantly, smooth payment transactions, SEO-friendly platform driving organic traffic",
    summary: "Complete eCommerce solution with payment gateway integration",
  },
  {
    clientName: "Silver Star Network",
    from: new Date("2024-01-01"),
    to: new Date("2024-12-01"),
    logo: "/network-cable-logo.jpg",
    problem: "Needed to track 1000+ cable connections from hub to destinations manually",
    solution:
      "Created a full-stack MERN app with JWT authentication and Ola Maps integration for real-time connection tracking",
    techStack: ["React", "Node.js", "Express", "JWT", "Redux", "Ola Maps API", "MongoDB"],
    outcome:
      "Eliminated manual tracking errors, improved operational efficiency by 80%, real-time visibility of network",
    summary: "Network tracking system with real-time map integration",
  },
  {
    clientName: "TechVista Solutions",
    from: new Date("2023-06-01"),
    to: new Date("2024-03-01"),
    logo: "/tech-company-logo.jpg",
    problem: "Legacy inventory management system causing delays and errors",
    solution:
      "Developed modern inventory management platform with barcode scanning, automated alerts, and analytics dashboard",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Chart.js"],
    outcome: "Reduced inventory errors by 95%, improved stock visibility, automated reordering process",
    summary: "Modern inventory management with real-time analytics",
  },
  {
    clientName: "GreenLeaf Organics",
    from: new Date("2024-02-01"),
    to: new Date("2024-08-01"),
    logo: "/organic-food-logo.png",
    problem: "No online ordering system for organic produce delivery",
    solution:
      "Built subscription-based ordering platform with delivery scheduling, payment processing, and customer portal",
    techStack: ["React", "Node.js", "Stripe", "MongoDB", "Express", "Twilio", "AWS S3"],
    outcome: "Increased customer base by 300%, streamlined delivery operations, recurring revenue model established",
    summary: "Subscription-based organic produce delivery platform",
  },
  {
    clientName: "EduMaster Academy",
    from: new Date("2023-09-01"),
    to: new Date("2024-06-01"),
    logo: "/education-academy-logo.png",
    problem: "Manual student enrollment and course management processes",
    solution:
      "Created comprehensive learning management system with video hosting, assignments, grading, and parent portal",
    techStack: ["Next.js", "Firebase", "Stripe", "Vimeo API", "TailwindCSS", "TypeScript"],
    outcome: "Automated enrollment process, improved student engagement by 60%, enabled remote learning capabilities",
    summary: "Complete learning management system with video courses",
  },
]

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("[v0] Connected to MongoDB")

    // Clear existing clients
    await Client.deleteMany({})
    console.log("[v0] Cleared existing clients")

    // Insert seed data
    await Client.insertMany(seedClients)
    console.log("[v0] Successfully seeded 5 clients")

    await mongoose.connection.close()
    console.log("[v0] Database connection closed")
  } catch (error) {
    console.error("[v0] Error seeding database:", error)
    process.exit(1)
  }
}

seedDatabase()
