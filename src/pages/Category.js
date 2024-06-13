import React from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Container,
} from "@mui/material";
import "../style/category.css";



function Category() {

  const categories = [
    "Action",
    "Adventure",
    "Fantasy",
    "Comedy",
    "Japanese",
    "Anime",
  ];

	return (
		<div
			style={{
				background: "linear-gradient(90.11deg, #000000 61.83%, #2552A5 99.82%)",
			}}
		>
			<Container>
				<Typography
					variant="h2"
					gutterBottom
					style={{
						fontsSize: "96px",
						fontStyle: "italic",
						fontWeight: "700",
						textAlign: "left",
						color: "rgba(21, 97, 226, 1)",
						paddingTop: "30px",
					}}
				>
					Game of the year
				</Typography>
				<Typography
					gutterBottom
					style={{
						paddingBottom: "60px",
						fontsSize: "32px",
						fontStyle: "italic",
						fontWeight: "700",
						textAlign: "left",
						color: "rgba(198, 210, 242, 1)",
					}}
				>
					Recognizing a game that delivers the absolute best
					<br /> experience across all creative and technical fields.
				</Typography>

				<Grid container spacing={2}>
					{categories.map((category) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={3}
							key={category.name}
							style={{ padding: "25px" }}
						>
							<div className="card-container">
								<Card>
									<CardMedia
										component="img"
										height="220"
										image={"https://avatar-placeholder.iran.liara.run/"}
									/>
									<CardContent style={{ margin: 0, padding: 0 }}>
										<Link
											to={`/category/${category}`}
											key={category}
											style={{ textDecoration: "none" }}
										>
											<Button
												variant="contained"
												color="primary"
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
										</Link>
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
								{category}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default Category;
