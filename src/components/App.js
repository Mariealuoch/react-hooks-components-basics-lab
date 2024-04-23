import React from "react";
import NavBar from "./Navbar";
import Home from "./home";
import About from "./about"



{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
