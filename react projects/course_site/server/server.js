const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

loadEnvFile();

const app = express();
const port = process.env.PORT || 5000;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
const jwtSecret = process.env.JWT_SECRET;
const courseData = require("../src/data/courseDb.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/courses", (req, res) => {
  res.json(courseData.courses);
});

app.get("/projects", (req, res) => {
  res.json(courseData.projects);
});

app.get("/testimonials", (req, res) => {
  res.json(courseData.testimonials);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!adminEmail || !adminPasswordHash || !jwtSecret) {
    return res.status(500).json({
      message: "Server auth configuration is missing",
    });
  }

  const isEmailValid = email === adminEmail;
  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);

  if (isEmailValid && isPasswordValid) {
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: "5m" });

    return res.json({ token });
  }

  return res.status(401).json({
    message: "Invalid email or password",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const envFile = fs.readFileSync(envPath, "utf8");

  envFile.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return;
    }

    const equalsIndex = trimmedLine.indexOf("=");

    if (equalsIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, equalsIndex).trim();
    const value = trimmedLine.slice(equalsIndex + 1).trim();

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
}
