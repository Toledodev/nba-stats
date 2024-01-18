const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/players", async (req, res) => {
  try {
    const response = await axios.get(
      "api/v1/season_averages?season=2023&player_ids[]=1&player_ids[]=2"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
