import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    // In a real application, this would serve an actual PDF file
    // For now, we'll create a simple response indicating the download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Shyam_J_Resume.pdf"');
    
    // Send a simple text response (in production, this would be a real PDF)
    res.send(Buffer.from("This would be Shyam J's resume PDF content."));
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
