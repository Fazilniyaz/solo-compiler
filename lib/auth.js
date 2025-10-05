import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "solocompiler-secret-key-2025"

// Predefined admin credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "SoloCompiler@2025",
}

export function verifyCredentials(username, password) {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export function generateToken(username) {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "24h" })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}
