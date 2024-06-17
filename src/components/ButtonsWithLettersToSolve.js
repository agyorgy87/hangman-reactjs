import React from 'react';
import "../css/Game.css";

const ButtonsWithLettersToSolve = ({wordToBeDeciphered, setWordToBeDechipered, setLetterForDisabled, buttonDisabled, secretWordForAGame, setButtonDisabled, hangManStatus, setHangManStatus, showResult, winOrLose}) => { 

    const searchForTheLetter = (letter) => {

        let arrayForLetterToInsert = [...wordToBeDeciphered]
        setLetterForDisabled(letter);
        let arrayForSetDisabledLetter = {...buttonDisabled}

        for(let i = 0; i < secretWordForAGame.current.length; i++){
            if(secretWordForAGame.current[i] === letter){
                arrayForLetterToInsert[i] = letter
                arrayForSetDisabledLetter[letter] = true;
                setButtonDisabled(arrayForSetDisabledLetter);
            }
        }

        if(secretWordForAGame.current.includes(letter) === false){
            arrayForSetDisabledLetter[letter] = true;
            setButtonDisabled(arrayForSetDisabledLetter);
            setHangManStatus(hangManStatus + 1);
        }

        setWordToBeDechipered(arrayForLetterToInsert)
        console.log(wordToBeDeciphered);
        //letsSeeTheResult(wordToBeDeciphered);
    }

    return (
        <div className="letter-container">
                    {showResult ? 
                        <div>
                            <div className="letters-first-row">
                                <button className="letter-buttons-style" disabled={buttonDisabled.A} onClick={() => searchForTheLetter("A")}>A</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.B} onClick={() => searchForTheLetter("B")}>B</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.C} onClick={() => searchForTheLetter("C")}>C</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.D} onClick={() => searchForTheLetter("D")}>D</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.E} onClick={() => searchForTheLetter("E")}>E</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.F} onClick={() => searchForTheLetter("F")}>F</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.G} onClick={() => searchForTheLetter("G")}>G</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.H} onClick={() => searchForTheLetter("H")}>H</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.I} onClick={() => searchForTheLetter("I")}>I</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.J} onClick={() => searchForTheLetter("J")}>J</button>  
                            </div>
                            <div className="letters-second-row"> 
                                <button className="letter-buttons-style" disabled={buttonDisabled.K} onClick={() => searchForTheLetter("K")}>K</button>  
                                <button className="letter-buttons-style" disabled={buttonDisabled.L} onClick={() => searchForTheLetter("L")}>L</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.M} onClick={() => searchForTheLetter("M")}>M</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.N} onClick={() => searchForTheLetter("N")}>N</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.O} onClick={() => searchForTheLetter("O")}>O</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.P} onClick={() => searchForTheLetter("P")}>P</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.Q} onClick={() => searchForTheLetter("Q")}>Q</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.R} onClick={() => searchForTheLetter("R")}>R</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.S} onClick={() => searchForTheLetter("S")}>S</button>                     
                            </div>
                            <div className="letters-third-row">
                                <button className="letter-buttons-style" disabled={buttonDisabled.T} onClick={() => searchForTheLetter("T")}>T</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.U} onClick={() => searchForTheLetter("U")}>U</button> 
                                <button className="letter-buttons-style" disabled={buttonDisabled.V} onClick={() => searchForTheLetter("V")}>V</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.W} onClick={() => searchForTheLetter("W")}>W</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.X} onClick={() => searchForTheLetter("X")}>X</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.Y} onClick={() => searchForTheLetter("Y")}>Y</button>
                                <button className="letter-buttons-style" disabled={buttonDisabled.Z} onClick={() => searchForTheLetter("Z")}>Z</button>
                            </div>
                        </div>
                    :
                        <div className="result-texts-container">
                            { winOrLose ?
                                <div>
                                    <p className="result-texts">YOU WON :)</p>
                                </div>    
                            :
                                <div>
                                    <p className="result-texts">YOU LOSE :(</p> 
                                    <p className="result-texts">TRY AGAIN ;)</p>
                                </div>
                            } 
                        </div>
                    }                                        
                </div>
    )
}

export default ButtonsWithLettersToSolve;