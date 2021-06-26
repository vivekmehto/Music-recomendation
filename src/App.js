import React from "react";
import "./styles.css";
import { useState } from "react";

const musicLib = {
  pop: [
    {
      name: "7 Rings",
      singer: "Ariana Grande",
      img:
        "https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png"
    },
    {
      name: "Shape of You",
      singer: "Ed sheran",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png/220px-Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"
    }
  ],

  bollywood: [
    {
      name: "Sada haq",
      singer: "Mohit Chauhan",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Saadda_Haq%2C_Rockstar.jpg/220px-Saadda_Haq%2C_Rockstar.jpg"
    },
    {
      name: "Tum hi ho",
      singer: "Arijit Singh",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Aashiqui_2.jpeg/220px-Aashiqui_2.jpeg"
    }
  ],
  dance: [
    {
      name: "Closer",
      singer: "The Chainsmokers",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png/220px-Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
    },
    {
      name: "One Dance",
      singer: "Drake",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Wizkid_at_Iyanya%27s_album_launch_concert%2C_2013.jpg/150px-Wizkid_at_Iyanya%27s_album_launch_concert%2C_2013.jpg"
    },
    {
      name: "Highest in the room",
      singer: "Travis Scott",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Travis_Scott_-_Highest_in_the_Room.png/220px-Travis_Scott_-_Highest_in_the_Room.png"
    },
    {
      name: "Sicko Mode",
      singer: "Travis Scott",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Sicko_Mode_cover.jpg/220px-Sicko_Mode_cover.jpg"
    }
  ],
  Misc: [
    {
      name: "Bad Guy",
      singer: "Billie Ellish ",
      img:
        "https://upload.wikimedia.org/wikipedia/en/3/33/Billie_Eilish_-_Bad_Guy.png"
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png/220px-Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png"
    },
    {
      name: "Something just like this",
      singer: "The Chainsmokers",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Something_Just_Like_This.png/220px-Something_Just_Like_This.png"
    },
    {
      name: "See You Again",
      singer: "Wiz Khalifa",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Wiz_Khalifa_Feat._Charlie_Puth_-_See_You_Again_%28Official_Single_Cover%29.png/220px-Wiz_Khalifa_Feat._Charlie_Puth_-_See_You_Again_%28Official_Single_Cover%29.png"
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
