import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import { VoteContext } from '../context/VoteContext';

function GameDetails() {
  const { id } = useParams();
  const { games, voteForGame } = useContext(VoteContext);
  const game = games.find(game => game.id === (id));

  if (!game) {
    return <Typography variant="h6">Game not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {game.name}
      </Typography>
      <Typography variant="body1" paragraph>
        {game.description || 'No description available.'}
      </Typography>
      <Typography variant="body1">Votes: {game.votes}</Typography>
      <Button variant="contained" color="primary" onClick={() => voteForGame(game.id)}>
        Vote
      </Button>
    </Container>
  );
}

export default GameDetails;
