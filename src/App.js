import './App.css';
import background from "./images/squareMeshPaper.jpg";
import Game from "./Game.js";


const App = () => {
    
    return (
        <div className="App" style={{ backgroundImage: `url(${background})`}}>
            <div>
                <Game />
            </div>
        </div>
    );
}

export default App;

