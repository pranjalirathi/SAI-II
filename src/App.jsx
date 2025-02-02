import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import CardSection from "./components/blog";
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Home from "./Home";
import BlogPost from "./components/blogpost";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
    <div>
      <Navigation />
    <Routes>
     <Route path="/" element={ <Home />} />
     <Route path="/blog" element={ <BlogPost />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
