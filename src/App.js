import React from "react";
import "./styles.css";
import { useState } from "react";

const musicLib = {
  pop: [
    { name: "7 Rings", singer: "Ariana Grande" },
    { name: "Him and I", singer: "Halsey" }
  ],

  bollywood: [
    { name: "Mirchi", singer: "Divine" },
    { name: "Dope Shop", singer: "Honey Singh" }
  ],
  dance: [
    { name: "Goosebumps", singer: "Travis Scott" },
    { name: "Franchise", singer: "Travis Scott" },
    { name: "The Scotts", singer: "Travis Scott" },
    { name: "Sicko Mode", singer: "Travis Scott" }
  ],
  punjabi: [
    { name: "Brown Munde", singer: "AP Dhillion" },
    { name: "Born to Shine", singer: "Diljit Dosanjh" },
    { name: "Same Beef", singer: "Sidhu Moosewala" },
    { name: "So High", singer: "Sidhu Moosewala" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("dance");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Music Recomendation </h1>
      <p>Checkout my favourite Music. Select a genre to get started.</p>

      <div>
        {Object.keys(musicLib).map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {musicLib[selectedGenre].map((genre) => (
            <li key={genre.name}>
              <div className="div-name"> {genre.name} </div>
              <div className="div-singer"> {genre.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
