import React, { createContext, useState, useEffect } from 'react';
import gamesData from '../json/games.json';  // Import JSON file

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the games data from the JSON file
    setGames(gamesData);
  }, []);

  const voteForGame = (id) => {
    setGames(games.map(game =>
      game.id === id ? { ...game, votes: game.votes + 1 } : game
    ));
  };

  return (
    <VoteContext.Provider value={{ games, voteForGame }}>
      {children}
    </VoteContext.Provider>
  );
};
