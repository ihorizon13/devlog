import 'dotenv/config'
import express from 'express'
import cors from 'cors'
const required = ['CORS_ORIGIN'] as const
for (const key of required) {
if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`)
    console.error(`Copy .env.example to .env and fill in the values.`)
process.exit(1)
}
}
const app = express() //creating server
const PORT = process.env.PORT || 4000 //the port that will be used
app.use(cors({ origin: process.env.CORS_ORIGIN })) //http link - website name
app.use(express.json()) //reading data in json
app.get('/api/health', (_req, res) => {
res.json({ status: 'ok', timestamp: new Date().toISOString() })
})
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`) //logging-displaying data
console.log( `Health check: http://localhost:${PORT}/api/health`)
}) //starts the server and "listens" for requests
