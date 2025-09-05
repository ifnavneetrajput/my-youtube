const express = require("express");
const fetch = require("node-fetch"); // v2 works with require

const app = express();

app.use(require('cors')())
app.get("/api/suggestions", async (req, res) => {
  try {
    const q = req.query.q;
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`
    );
    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8080, () => {
  console.log("Proxy server running on http://localhost:8080");
});
