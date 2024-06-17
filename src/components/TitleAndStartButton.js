import React from 'react';
import "../css/TitleAndStartButton.css";

const TitleAndStartButton = ({ allWords, secretWordForAGame, setWordToBeDechipered, setShowWordToBeDechipered,startOrRestart, setStartOrRestrat, setHangManStatus, setShowResult, setButtonDisabled}) => {

    const GenerateAWordToStartTheGame = () => {
        const randomWordObjectType = (Math.random()>=0.5)? 1 : 0;
        const randomWordType = Math.floor(Math.random() * 6) + 1;
        const selectedWordForAGame = allWords[randomWordObjectType].possibleRandomObject[randomWordType].possibleRandomWord;
        const selectedWordAsStringInArray = selectedWordForAGame.split("");
        secretWordForAGame.current = selectedWordAsStringInArray;
        let arrayForASecretWord = [];
        for(let i = 0; i < selectedWordAsStringInArray.length; i++){
            let underLineForALetter = "_"
            arrayForASecretWord.push(underLineForALetter);
        }
        setWordToBeDechipered(arrayForASecretWord);
        setShowWordToBeDechipered(false);
        setStartOrRestrat("RESTART");
        setHangManStatus(0);
        setShowResult(true);
        setButtonDisabled({
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false,
        "K": false,
        "L": false,
        "M": false,
        "N": false,
        "O": false,
        "P": false,
        "Q": false,
        "R": false,
        "S": false,
        "T": false,
        "U": false,
        "V": false,
        "W": false,
        "X": false,
        "Y": false,
        "Z": false
    });
    } 

    return (
        <div className="title-and-start-button-container">
            <div className="title-and-start-button-container">
                <h1 className="hangman-title">HANGMAN</h1>
                    <div className="start-button-container">
                        <button className="start-button" onClick={GenerateAWordToStartTheGame}>
                            {startOrRestart}
                        </button>
                    </div>
            </div>
        </div>
  )
}

export default TitleAndStartButton;