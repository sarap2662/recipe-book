import axios, * as others from "axios";
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Page Imports
import Home from "./pages/home";
import Add from "./pages/add";
import RecipeBook from "./pages/recipes";
import Error404 from "./pages/error404";
import EditRecipe from "./pages/editRecipe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes/add" element={<Add />} />
        <Route path="/recipes" element={<RecipeBook />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
