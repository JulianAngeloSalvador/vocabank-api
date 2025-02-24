import express, { Express } from "express";

export default function expressConfig(app: Express) {
  // Serve static files from the 'public' directory
  app.use(express.static("public"));

  // Parse URL-encoded request bodies
  app.use(express.urlencoded({ extended: true }));

  // Parse JSON request bodies
  app.use(express.json());
}
