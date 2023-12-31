import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";
import accidentInfoRouter from "../routes/getAccident.js";
import severityRouter from "../routes/getSeverity.js";
import accidentTimeRouter from "../routes/getAccidentTime.js";
import accidentHourRouter from "../routes/getAccidentHour.js";
import langLatRouter from "../routes/getLongLat.js";
import CarTypeRouter from "../routes/getCarType.js";

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//defined neccessary header to avoid vulnerabilities of the security.
app.use((req, res, next) => {
  res.header(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  res.header("X-Frame-Options", "SAMEORIGIN");
  res.header("X-Content-Type-Options", "nosniff");
  // Other headers can be added here
  next();
});

// Middleware to block access to certain paths
app.use((req, res, next) => {
  const blockedPaths = ["/secret", "/backup", "/hidden"];
  const isPathBlocked = blockedPaths.some((path) => req.path.startsWith(path));

  if (isPathBlocked) {
    // If the path is blocked, return a 403 Forbidden status
    res.status(403).send("Access denied");
  } else {
    // Otherwise, allow the request to proceed
    next();
  }
});

// app.get(/^(?!\/api).+/, (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });
app.use(express.static(path.join(__dirname, "../dist")));

// Use the accidentInfoRouter
app.use("/accidentDays", accidentInfoRouter);
app.use("/severity", severityRouter);
app.use("/accidentTime", accidentTimeRouter);
app.use("/CarType", CarTypeRouter);
app.use("/accidentHour", accidentHourRouter);
app.use("/LongLat", langLatRouter);
// should always the last
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

//noticed result when anyone try to find the path of sensitive file
app.get("/secret/data", (req, res) => {
  res.send("This path should be blocked!");
});
app.get("/backup/data", (req, res) => {
  res.send("This path should be blocked!");
});

app.get("/hidden/files", (req, res) => {
  res.send("This path should be blocked!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

const PORT = process.env.PORT || 8003;

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
