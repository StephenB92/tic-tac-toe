import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import "./index.css";

function App() {
  

  return <main>
    <div id="game-container">
      <ol id="Players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />
      </ol>
      <GameBoard />
    </div>
  </main>;
}

export default App
