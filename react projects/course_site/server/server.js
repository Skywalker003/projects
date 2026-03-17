const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend is running")
})

app.post("/login", (req, res) => {

  const { email, password } = req.body

  if(email === "admin@gmail.com" && password === "123456"){

    const token = jwt.sign(
      { email },
      "secretkey",
      { expiresIn: "5m" }
    )

    res.json({ token })

  } else {

    res.status(401).json({
      message: "Invalid email or password"
    })

  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
  console.log("http://localhost:5000")
})