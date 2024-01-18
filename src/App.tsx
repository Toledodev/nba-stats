import React, { useEffect, useState } from "react";
import "./App.css";
import { getPlayers } from "./services/api";

const App = () => {
  const [playerNames, setPlayerNames] = useState(""); // String to store player names
  const [playerIds, setPlayerIds] = useState<any>([]); // Array to store player IDs

  useEffect(() => {
    const fetchPlayers = async () => {
      const names = playerNames.split(",").map((name) => name.trim()); // Split names by comma and trim whitespace
      const ids = [];
      for (const name of names) {
        const playerData = await getPlayers(name);
        console.log(playerData);
        if (playerData.length > 0) {
          console.log(playerData[0].id);
          ids.push(playerData[0].id); // Assuming the first result is the desired player
        }
      }
      console.log(ids);

      setPlayerIds(ids);
    };

    if (playerNames) {
      fetchPlayers();
    }
  }, [playerNames]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA Players</h1>
        <input
          type="text"
          value={playerNames}
          onChange={(event) => setPlayerNames(event.target.value)}
          placeholder="Enter player names separated by commas"
        />
        <button onClick={() => setPlayerNames("")}>Clear</button>
        <div>Player IDs: {playerIds.join(", ")}</div>
      </header>
    </div>
  );
};

export default App;
