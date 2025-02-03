import React from "react";

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>Welcome to my portfolio!</p>
    </div>
  );
}

// Step 2: Creating the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Step 1 & 3: Rendering all components inside App
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> {/* New About component added */}
    </div>
  );
}

export default App;
