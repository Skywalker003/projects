const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// loading values from .env before using them below
loadEnvFile();

const app = express();
const port = process.env.PORT || 5000;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
const jwtSecret = process.env.JWT_SECRET;
// getting all the course site data from the local json file
const courseData = require("../src/data/courseDb.json");

// lets frontend requests access this backend
app.use(cors());
// this lets express read json data coming from req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// sending only the courses array from the json data
app.get("/courses", (req, res) => {
  res.json(courseData.courses);
});

// sending the projects section separately
app.get("/projects", (req, res) => {
  res.json(courseData.projects);
});

// sending testimonials data for the frontend
app.get("/testimonials", (req, res) => {
  res.json(courseData.testimonials);
});

// login route for admin access
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // if any auth env value is missing, login should not continue
  if (!adminEmail || !adminPasswordHash || !jwtSecret) {
    return res.status(500).json({
      message: "Server auth configuration is missing",
    });
  }

  // first checking if the entered email matches admin email
  const isEmailValid = email === adminEmail;
  // bcrypt.compare checks the plain password against the saved hashed password
  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);

  if (isEmailValid && isPasswordValid) {
    // creating a token so admin can stay logged in for a short time
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

  // if there is no .env file, just skip this part
  if (!fs.existsSync(envPath)) {
    return;
  }

  const envFile = fs.readFileSync(envPath, "utf8");

  envFile.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    // ignoring empty lines and comment lines
    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return;
    }

    const equalsIndex = trimmedLine.indexOf("=");

    // skipping invalid env lines that do not have =
    if (equalsIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, equalsIndex).trim();
    const value = trimmedLine.slice(equalsIndex + 1).trim();

    // only setting the env value if it was not already set before
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
}
