import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("HARO WADO");
});

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
