export default function Header({clickedGames, bestScore}){
    return(
        <header>
            <h1 className="logo">MEMORY GAME</h1>
            <div className="scores">
                <p className="currentScore">Current Score: {clickedGames.length}</p>
                <p className="bestScore">Best Score: {bestScore}</p>
            </div>
        </header>
    )
}