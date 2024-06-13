import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Container } from '@mui/material';
import { VoteContext } from '../context/VoteContext';

function Home() {
  const { games, voteForGame } = useContext(VoteContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Popular Games
      </Typography>
      {games.map((game) => (
        <Card key={game.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{game.name}</Typography>
            <Typography variant="body1">Votes: {game.votes}</Typography>
            <Button variant="contained" color="primary" onClick={() => voteForGame(game.id)}>
              Vote
            </Button>
            <Link to={`/game/${game.id}`}>
              <Button variant="contained" style={{ marginLeft: '10px' }}>
                Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Home;
