import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import  GamePage from './components/GamePage.jsx';


function App() {

    const [games, setGames] = useState([]);
    const [clickedGames, setClickedGames] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [bestScore, setBestScore] = useState(0);
    
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function handleCardClick(game) {
  if (flipped) return;

  setClickedGames(prev => {
    if (prev.find(g => g.id === game.id)) {
      setEndGame(false);
      return [];
    }

    const newClicked = [...prev, game];

    if (newClicked.length === 12){
      setEndGame(true);
     }
     
    if (newClicked.length > bestScore) {
      setBestScore(newClicked.length);
    }

    return newClicked;

  })

  setFlipped(true);

  setTimeout(() => {
    setGames(prev => shuffle(prev));
  }, 1000); 

  setTimeout(() => {
    setFlipped(false);
  }, 1600); 
}
  return(
    <>
        <Header 
            clickedGames={clickedGames}
            bestScore={bestScore}
          />
        <GamePage 
            games={games}
            setGames={setGames}
            handleCardClick={handleCardClick}
            flipped={flipped}
        />
    </>
)}

export default App
