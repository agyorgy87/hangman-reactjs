import './css/App.css';
import background from "./images/squareMeshPaper.jpg";
import Game from "./components/Game.js";


const App = () => {
    
    return (
        <div className="app" style={{ backgroundImage: `url(${background})`}}>
            <div>
                <Game />
            </div>
        </div>
    );
}

export default App;

