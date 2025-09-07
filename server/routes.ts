import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
  const filePath = path.resolve(__dirname, "files", "Shyam Resume.pdf");

  // Check if file exists 
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Resume not found");
  }

  // Send file as download
  res.setHeader("Cache-Control", "no-store");
  res.download(filePath, "Shyam Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading resume:", err);
      res.status(500).send("Error downloading resume");
    }
  });
});


  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid email format" 
      });
    }

    // In a real application, you would:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Send an auto-reply to the sender
    
    console.log("Contact form submission:", { name, email, message });
    
    res.json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
