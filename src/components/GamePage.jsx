import { useEffect } from "react";
import backCard from "./assets/backCard.jpg";

export default function GamePage({ games, setGames, handleCardClick, flipped }) {

  useEffect(() => {
    const slugs = [
      "nobody-saves-the-world",
      "gothic-2",
      "the-witcher-3-wild-hunt",
      "elden-ring",
      "the-legend-of-zelda",
      "minecraft",
      "dark-souls",
      "graveyard-keeper",
      "throne-and-liberty",
      "sons-of-the-forest",
      "cult-of-the-lamb",
      "hollow-knight"
    ];

    Promise.all(
      slugs.map(slug =>
        fetch(`https://api.rawg.io/api/games/${slug}?key=c991a5ce873d4c26a0be0e3afe4e7dc8`)
          .then(res => res.json())
      )
    ).then(results => setGames(results));
  }, [setGames]);

  return (
    <div className="games">
      {games.map(game => (
        <div
          key={game.id}
          className={`cardBox ${flipped ? "flipped" : ""}`}
          onClick={() => handleCardClick(game)}
        >
          <div className="cardInner">

            <div className="cardFace cardFront">
              <img
                className="cardImage"
                src={game.background_image}
                alt={game.name}
              />
              <p>{game.name}</p>
            </div>

            <div className="cardFace cardBack">
              <img
                className="cardImage"
                src={backCard}
                alt="back"
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
