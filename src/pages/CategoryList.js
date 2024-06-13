import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	Grid,
	CardMedia,
	Typography,
	Card,
	CardContent,
	Button,
	TextField,
	InputAdornment
} from "@mui/material";
import { VoteContext } from "../context/VoteContext";
import SearchIcon from "@mui/icons-material/Search";

function CategoryList() {
	const { categoryName } = useParams();
	const { games, voteForGame } = useContext(VoteContext);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const gameFilters = games.filter(
    (game) =>
      categoryName === game.category &&
      (searchTerm === "" || game.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

	const handleImageClick = (id) => {
		navigate(`/game/${id}`);
	};

	return (
		<div
			style={{
				background: "linear-gradient(90.11deg, #000000 61.83%, #2552A5 99.82%)",
				display: "flex", 
				flexDirection: 'column',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Typography variant="h4" gutterBottom style={{color: 'rgba(21, 97, 226, 1)', fontWeight: '700', fontSize: '48px', margin: '30px'}}>
				{categoryName} Games
			</Typography>

			<TextField
				placeholder="Search Game"
        variant="outlined"
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          style: {
            color: 'white',
            height: '40px',
            borderRadius: '4px',
            border: '1px solid rgba(21, 97, 226, 1)', // Border mặc định
            "&:focus": {
              borderColor: '#2976FA', // Border khi focus
              boxShadow: '0 0 0 2px rgba(41, 118, 250, 0.5)', // Độ dày border khi focus
            }						
          },
					startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#ccc" }} />
            </InputAdornment>
          ),
        }}	
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "4px",
          width: "500px",
          margin: "0px auto 40px",
          height: '40px',
					paddingTop: '8px', // Điều chỉnh căn bằng theo chiều dọc
          paddingBottom: '8px', // Điều chỉnh căn bằng theo chiều dọc
        }}
      />

			<Grid container spacing={2}>
				{gameFilters.map((game) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={3}
						key={game.id}
						style={{ padding: "25px" }}
					>
						<div className="card-container">
							<Card>
								<CardMedia
									component="img"
									height="220"
									image={game.image}
									alt={game.name}
									onClick={() => handleImageClick(game.id)}
									style={{ cursor: "pointer" }}
								/>
								<CardContent style={{ margin: 0, padding: 0 }}>
									<Button
										variant="contained"
										color="primary"
										onClick={() => voteForGame(game.id)}
										style={{
											marginTop: "10px",
											width: "100%",
											height: "50px",
											background:
												"linear-gradient(90deg, #7DABF9 0%, #2976FA 100%)",
											fontSize: "16px",
											textAlign: "Center",
										}}
									>
										Vote
									</Button>
								</CardContent>
							</Card>
						</div>
						<Typography
							gutterBottom
							style={{
								paddingTop: "10px",
								fontsSize: "32px",
								fontStyle: "italic",
								fontWeight: "700",
								textAlign: "left",
								color: "#fefefe",
							}}
						>
							{game.name}
						</Typography>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default CategoryList;
