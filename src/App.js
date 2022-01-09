import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import States from "./components/States";
import Vaccination from "./components/Vaccination";
import Maps from "./components/Maps";
import Testing from "./components/Testing";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
  return (
	<div className="App">
	  <BrowserRouter>
		<Navbar />
		<h1>COVID-19 in Germany</h1>
		<Routes>
		  <Route path="/" element={<MainPage />} />
		  <Route path="/states" element={<States />} />
		  <Route path="/vaccination" element={<Vaccination />} />
		  <Route path="/maps" element={<Maps />} />
		  <Route path="/testing" element={<Testing />} />
		  <Route path="*" element={<Error />} />
		</Routes>
	  </BrowserRouter>
	  <footer>
        <Footer/>
      </footer>
	</div>
  );
}

export default App;
