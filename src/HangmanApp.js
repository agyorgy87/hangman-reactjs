import './css/HangmanApp.css';
import { useEffect, useState, useRef } from 'react';
import background from "./images/squareMeshPaper.jpg";
import randomWords from "./json/randomWords.json";
import TitleAndStartButton from './components/TitleAndStartButton.js';
import WordToBeSolve from './components/WordToBeSolve.js';
import ButtonsWithLettersToSolve from './components/ButtonsWithLettersToSolve.js';
import HangmanWithCanvas from './components/HangmanWithCanvas.js';

const HangmanApp = () => { 

    const secretWordForAGame = useRef([]);

    const [allWords, setAllWords] = useState(randomWords);
    const [wordToBeDeciphered, setWordToBeDechipered] = useState([]);
    const [showWordToBeDechipered, setShowWordToBeDechipered] = useState(true);
    const [startOrRestart, setStartOrRestrat] = useState("START");
    const [hangManStatus, setHangManStatus] = useState(0);
    const [showResult, setShowResult] = useState(true);
    const [winOrLose, setWinOrLose] = useState(true);
    const [letterForDisabled, setLetterForDisabled] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState({
        "A": true,
        "B": true,
        "C": true,
        "D": true,
        "E": true,
        "F": true,
        "G": true,
        "H": true,
        "I": true,
        "J": true,
        "K": true,
        "L": true,
        "M": true,
        "N": true,
        "O": true,
        "P": true,
        "Q": true,
        "R": true,
        "S": true,
        "T": true,
        "U": true,
        "V": true,
        "W": true,
        "X": true,
        "Y": true,
        "Z": true
    });
    
    
    useEffect(() => {
        if(showResult === true && wordToBeDeciphered.length > 0){
            if(hangManStatus === 7){
                setShowResult(false);
                setWinOrLose(false);
            }
            if(wordToBeDeciphered.includes("_") === false){
                setShowResult(false);
                setWinOrLose(true);
            }
        }
    }, [hangManStatus, wordToBeDeciphered, showResult]);
    
    return (
        <div className="main-board" >{/*style={{ backgroundImage: `url(${background})`}}*/} 
            <div className="game-board">
                <div>
                    <TitleAndStartButton 
                    allWords={allWords} 
                    secretWordForAGame={secretWordForAGame}
                    setWordToBeDechipered={setWordToBeDechipered}
                    setShowWordToBeDechipered={setShowWordToBeDechipered}
                    startOrRestart={startOrRestart}
                    setStartOrRestrat={setStartOrRestrat}
                    setHangManStatus={setHangManStatus}
                    setShowResult={setShowResult}
                    setButtonDisabled={setButtonDisabled}
                    />
                </div>
                <div className="solve-and-buttons-table-and-hangman-canvas-container">
                    <div>
                        <div>
                            <WordToBeSolve
                            showWordToBeDechipered={showWordToBeDechipered}
                            wordToBeDeciphered={wordToBeDeciphered}
                            />
                        </div>
                        <div>
                            <ButtonsWithLettersToSolve
                            wordToBeDeciphered={wordToBeDeciphered}
                            setWordToBeDechipered={setWordToBeDechipered}
                            buttonDisabled={buttonDisabled}
                            setButtonDisabled={setButtonDisabled}
                            setLetterForDisabled={setLetterForDisabled}
                            secretWordForAGame={secretWordForAGame}
                            hangManStatus={hangManStatus}
                            setHangManStatus={setHangManStatus}
                            showResult={showResult}
                            winOrLose={winOrLose}
                            />
                        </div>
                    </div>
                    <div>
                        <HangmanWithCanvas
                        hangManStatus={hangManStatus}
                        />
                    </div>
                </div>              
            </div>        
        </div>
    );
}

export default HangmanApp;

