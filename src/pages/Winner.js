import React, { useContext, useState } from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import { VoteContext } from "../context/VoteContext";

const categories = [
	"Action",
	"Adventure",
	"Fantasy",
	"Comedy",
	"Japanese",
	"Anime",
];

function Winner() {
	const { games } = useContext(VoteContext);
	const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

	// Lấy category hiện tại
	const currentCategory = categories[currentCategoryIndex];

	// Lọc và sắp xếp danh sách games theo votes giảm dần cho category hiện tại
	const sortedGames = games
		.filter((game) => game.category === currentCategory)
		.sort((a, b) => b.votes - a.votes);

	const highestVotedGame = sortedGames.length > 0 ? sortedGames[0] : null;

	const handlePreviousCategory = () => {
		setCurrentCategoryIndex(
			(prevIndex) => (prevIndex - 1 + categories.length) % categories.length
		);
	};

	const handleNextCategory = () => {
		setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
	};

	return (
		<div>
			<Container className="winner-conatiner" style={{background: 'linear-gradient(130.87deg, #000000 26.6%, #2552A5 95.93%)', margin: 0, padding: 0, width: '100%'}}>
				<div class="winner-header">
					<Box display="flex" justifyContent="space-between">
						<Button variant="contained" onClick={handlePreviousCategory} style={{ background: 'transparent'}}  >
							Previous Category
						</Button>
						<Typography variant="h4" gutterBottom style={{fontWeight: '700', fontSize: '70px', color: 'rgba(21, 97, 226, 1)' }}>
							Winner in {currentCategory}
						</Typography>
						<Button variant="contained" onClick={handleNextCategory} style={{ background: 'transparent'}}>
							Next Category
						</Button>
					</Box>
				</div>
				{highestVotedGame ? (
					<Box>
						<img
							src={highestVotedGame.image}
							alt={highestVotedGame.name}
							style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
						/>
						<Typography variant="h5">
							{highestVotedGame.name}: {highestVotedGame.votes} votes
						</Typography>
					</Box>
				) : (
					<Typography variant="body1">
						No games available in this category.
					</Typography>
				)}
			</Container>
		</div>
	);
}

export default Winner;
