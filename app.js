require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmailForEnquiry, sendEmailForAudit } = require("./controller");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// Serve static files from the 'public' folder
app.use(express.static("public"));


// Route to list all PDFs in the 'pdf' folder
app.get("/pdf", (req, res) => {
  const pdfDir = path.join(__dirname, "public", "pdf");
  fs.readdir(pdfDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read PDF directory" });
    }
    const pdfFiles = files.filter(file => file.endsWith(".pdf"));
    res.json(pdfFiles.map(file => `http://localhost:${PORT}/pdf/${file}`));
  });
});

// Route to serve a specific PDF file dynamically
app.get("/pdf/:filename", (req, res) => {
  const filePath = path.join(__dirname, "public", "pdf", req.params.filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: "File not found" });
  }
});

app.get('/', (req, res) => res.send('<h1>Born21 Backend API</h1>'))
// app.post("/email-enquiry", sendEmailForEnquiry);
app.post("/email-audit", sendEmailForAudit);

app.listen(5000, console.log(5000, "PORT"));
