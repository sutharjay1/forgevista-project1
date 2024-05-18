import React from 'react';
import Header from './components/Header';
import { colorTheme } from './constants/colorTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Auth from './page/Auth';
import AboutUs from './page/AboutUs';

const App = () => {
	return (
		<BrowserRouter>
			<div className="w-full 	h-full flex flex-col items-start justify-start text-[#16191E]">
				<Header />
				<AppRouter />
			</div>
		</BrowserRouter>
	);
};

export default App;

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/auth"
				element={<Auth />}
			/>
			<Route
				path="/about-us"
				element={<AboutUs />}
			/>
			<Route
				path="/categories"
				element={<span>AboutUs</span>}
			/>
			<Route
				path="/campaign"
				element={<span>Campaign</span>}
			/>
			<Route
				path="/news"
				element={<span>News</span>}
			/>
			<Route
				path="/volunteer"
				element={<span>Volunteer</span>}
			/>
		</Routes>
	);
};
