import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ManaVerse MCP Server");
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
