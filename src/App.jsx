import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="w-full text-white bg-black">
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
