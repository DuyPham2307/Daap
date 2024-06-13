import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Winner from "./pages/Winner";
import Category from "./pages/Category";
import CategoryList from "./pages/CategoryList";
import FAQ from "./pages/FAQ";
import Header from "./components/Header";
import { VoteProvider } from "./context/VoteContext";
import reportWebVitals from './reportWebVitals';

function App() {
	return (
		<Router>
			<VoteProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game/:id" element={<GameDetails />} />
					<Route path="/winner" element={<Winner />} />
					<Route exact path="/category" element={<Category />} /> 
					<Route path="/category/:categoryName" element={<CategoryList />} />
					<Route exact path="/faq" element={<FAQ />} />
				</Routes>
			</VoteProvider>
		</Router>
	);
}

export default App;
