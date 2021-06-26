import React from "react";
import "./styles.css";
import { useState } from "react";

const musicLib = {
  pop: [
    {
      name: "7 Rings",
      singer: "Ariana Grande",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Him and I",
      singer: "Halsey",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ],

  bollywood: [
    {
      name: "Mirchi",
      singer: "Divine",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Dope Shop",
      singer: "Honey Singh",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ],
  dance: [
    {
      name: "Goosebumps",
      singer: "Travis Scott",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Franchise",
      singer: "Travis Scott",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "The Scotts",
      singer: "Travis Scott",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Sicko Mode",
      singer: "Travis Scott",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ],
  punjabi: [
    {
      name: "Brown Munde",
      singer: "AP Dhillion",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Born to Shine",
      singer: "Diljit Dosanjh",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Same Beef",
      singer: "Sidhu Moosewala",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "So High",
      singer: "Sidhu Moosewala",
      img:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
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
              <div className="div-img">
                <img src={genre.img} alt="img" />{" "}
              </div>
              <div className="div-name"> {genre.name} </div>
              <div className="div-singer"> {genre.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
