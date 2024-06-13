import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Container,
	Box,
	Typography,
} from "@mui/material";
import StickyNavbar from "../components/StickyNavbar"; // Điều chỉnh đường dẫn nếu cần

const items = [
  {
    title: "Item 1",
    description: "Description for Item 1",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Item 2",
    description: "Description for Item 2",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Item 3",
    description: "Description for Item 3",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Item 4",
    description: "Description for Item 4",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Item 5",
    description: "Description for Item 5",
    image: "https://via.placeholder.com/150"
  }
];

function FAQ() {
	return (
		<div
			style={{
				background: "linear-gradient(90.11deg, #000000 61.83%, #2552A5 99.82%)",
			}}
		>
			<StickyNavbar />
			<Container>
				<Box id="overview" sx={{ height: "100vh", paddingTop: 10,}}>
					<Typography
						variant="h2"
						style={{
							color: "rgba(21, 97, 226, 1)",
							fontWeight: "700",
							fontSize: "128px",
							lineHeight: "140px",
						}}
					>
						FAQ &<br /> RULES
					</Typography>
					<Typography
						variant="body1"
						style={{
							color: "#fefefe",
							fontWeight: "700",
							fontSize: "32px",
							lineHeight: "40px",
						}}
					>
						THIS FAQ IS DESIGNED TO ANSWER
						<br /> MANY COMMON QUESTIONS ABOUT
						<br /> THE GAME AWARDS, RULES AND <br />
						THE VOTING PROCESS.
					</Typography>
				</Box>

				<Box id="event" sx={{ paddingTop: 10, paddingBottom: '300px' }}>
					<Typography
						variant="h2"
						style={{
							color: "rgba(21, 97, 226, 1)",
							fontWeight: "700",
							fontSize: "48px",
							lineHeight: "60px",
              marginBottom: '40px'
						}}
					>
						The Event
					</Typography>

					<Grid container spacing={2}>
						{items.map((item, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card style={{border: '3px solid rgba(21, 97, 226, 1) '}} >
									<CardMedia
										component="img"
										height="150"
										image={item.image}
										alt={item.title}
									/>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{item.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
				<Box id="award" sx={{ paddingTop: 10, paddingBottom: '100px' }}>
					<Typography
						variant="h2"
						style={{
							color: "rgba(21, 97, 226, 1)",
							fontWeight: "700",
							fontSize: "48px",
							lineHeight: "60px",
              marginBottom: '40px'
						}}
					>
						The Award 
					</Typography>

					<Grid container spacing={2}>
						{items.map((item, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card style={{border: '3px solid rgba(21, 97, 226, 1) '}} >
									<CardMedia
										component="img"
										height="150"
										image={item.image}
										alt={item.title}
									/>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{item.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</div>
	);
}

export default FAQ;
