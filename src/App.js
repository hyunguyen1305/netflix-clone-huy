import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ListMovies from "./components/ListMovies";
import Header from "./components/Header/Header";

function App() {
  const [isFade, setFade] = useState(true);
  const header = useRef(null);
  const handleScroll = () => {
    if (header.current.getBoundingClientRect().top === window.pageYOffset) {
      setFade(true);
    } else {
      setFade(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <header className={`header ${isFade ? "" : "fade"}`} ref={header}>
        <Header></Header>
      </header>

      <main>
        <div style={{ width: "100%", height: "100vh", background: "orange" }}>
          Hero
        </div>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
        <ListMovies title="Trending Now"></ListMovies>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
