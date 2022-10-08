import '../css/Game.css';
import React, {useState, useRef, useEffect} from 'react';
import randomWords from "../randomWords.json";

const Game = () => {

    const [allWords, setAllWords] = useState(randomWords)

    const secretWordForAGame = useRef([]);

    const [wordToBeDeciphered, setWordToBeDechipered] = useState([]);

    const [letterForDisabled, setLetterForDisabled] = useState();

    const [showWordToBeDechipered, setShowWordToBeDechipered] = useState(true);

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

    const [hangManStatus, setHangManStatus] = useState(0);

    const canvas = useRef();

    const [startOrRestart, setStartOrRestrat] = useState("START");

    const [showResult, setShowResult] = useState(true);

    const [winOrLose, setWinOrLose] = useState(true);

    useEffect(() => {

        let ctx = null;

        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        ctx = canvasEle.getContext("2d");

        const drawLine = (info, style = {}) => {
            const { x, y, x1, y1 } = info;
            const { color = 'grey', width = 7 } = style;
        
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        
        const drawCircle = (info, style = {}) => {
            const {x, y, r, sAngle, eAngle} = info;
            const { color = 'grey', width = 7 } = style;
        
            ctx.beginPath();
            ctx.arc(x, y, r, sAngle, eAngle * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke()
        }

        if(hangManStatus === 1) {
        //1.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        }else if(hangManStatus === 2){
        //2.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //2.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        }else if(hangManStatus === 3){
        //3.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //3.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //3.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });
        }else if(hangManStatus === 4){
        //4.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //4.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //4.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //4.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 });   
        }else if(hangManStatus === 5){
        //5.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //5.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //5.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //5.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 });  
        //5.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        }else if(hangManStatus === 6){
        //6.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //6.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //6.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //6.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 }); 
        //6.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        //6.mouth
            drawCircle({x: 150, y:160, r:15, sAngle:3, eAngle:2 });
        }else if(hangManStatus === 7){
        //7.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //7.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //7.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //7.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 }); 
        //7.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        //7.mouth
            drawCircle({x: 150, y:160, r:15, sAngle:3, eAngle:2 });
        //7.left eye
            drawLine({ x: 130, y: 110, x1: 145, y1: 130 });
            drawLine({ x: 130, y: 130, x1: 145, y1: 110 });
        //7.right eye
            drawLine({ x: 155, y: 110, x1: 170, y1: 130 });
            drawLine({ x: 155, y: 130, x1: 170, y1: 110 });
        }
    }, [hangManStatus]);

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

    /*Another solution for result
    const letsSeeTheResult = (wordToBeDeciphered) => {
        if(hangManStatus === 7 || wordToBeDeciphered.includes("_") === false){
            setShowResult(false);
        }
    }
    */

    return (
        <div className="gameBoard">
            <div className="setgridHeaderBoxes">
                <div className="titleAndStartButtonBox">
                    <div className="setTitleAndStartButtonBox">
                        <h1 className="hangmanTitle">HANGMAN</h1>
                            <div className="startButtonBox">
                                <button className="startButton" onClick={GenerateAWordToStartTheGame}>
                                    {startOrRestart}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="secretWordContainer">
                <div className="secretWordBox">
                    {showWordToBeDechipered ? 
                        <div>
                            <p className="pushTheStartButtonToPlayTextTitle">Push the start button to play!</p>
                        </div>
                    :
                        <div>
                            {wordToBeDeciphered.map((element, index) => 
                            <div className="secretLetter" key={"deciphered" + index}> {element} </div>)}
                        </div>
                    }
                </div>
            </div>
                <div className="letterBoxContainer">
                    {showResult ? 
                        <div>
                            <div className="lettersFirstRow">
                                <button className="letterButtonsStyle" disabled={buttonDisabled.A} onClick={() => searchForTheLetter("A")}>A</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.B} onClick={() => searchForTheLetter("B")}>B</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.C} onClick={() => searchForTheLetter("C")}>C</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.D} onClick={() => searchForTheLetter("D")}>D</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.E} onClick={() => searchForTheLetter("E")}>E</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.F} onClick={() => searchForTheLetter("F")}>F</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.G} onClick={() => searchForTheLetter("G")}>G</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.H} onClick={() => searchForTheLetter("H")}>H</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.I} onClick={() => searchForTheLetter("I")}>I</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.J} onClick={() => searchForTheLetter("J")}>J</button>  
                            </div>
                            <div className="lettersSecondRow"> 
                                <button className="letterButtonsStyle" disabled={buttonDisabled.K} onClick={() => searchForTheLetter("K")}>K</button>  
                                <button className="letterButtonsStyle" disabled={buttonDisabled.L} onClick={() => searchForTheLetter("L")}>L</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.M} onClick={() => searchForTheLetter("M")}>M</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.N} onClick={() => searchForTheLetter("N")}>N</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.O} onClick={() => searchForTheLetter("O")}>O</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.P} onClick={() => searchForTheLetter("P")}>P</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.Q} onClick={() => searchForTheLetter("Q")}>Q</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.R} onClick={() => searchForTheLetter("R")}>R</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.S} onClick={() => searchForTheLetter("S")}>S</button>                     
                            </div>
                            <div className="lettersThirdRow">
                                <button className="letterButtonsStyle" disabled={buttonDisabled.T} onClick={() => searchForTheLetter("T")}>T</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.U} onClick={() => searchForTheLetter("U")}>U</button> 
                                <button className="letterButtonsStyle" disabled={buttonDisabled.V} onClick={() => searchForTheLetter("V")}>V</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.W} onClick={() => searchForTheLetter("W")}>W</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.X} onClick={() => searchForTheLetter("X")}>X</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.Y} onClick={() => searchForTheLetter("Y")}>Y</button>
                                <button className="letterButtonsStyle" disabled={buttonDisabled.Z} onClick={() => searchForTheLetter("Z")}>Z</button>
                            </div>
                        </div>
                    :
                        <div className="resultTextsBox">
                            { winOrLose ?
                                <div>
                                    <p className="resultTexts">YOU WON :)</p>
                                </div>    
                            :
                                <div>
                                    <p className="resultTexts">YOU LOSE :(</p> 
                                    <p className="resultTexts">TRY AGAIN ;)</p>
                                </div>
                            } 
                        </div>
                    }                                        
                </div>
                <div className="hangedManBox">
                    <canvas 
                    className="canvasBoard" 
                    ref={canvas}/>
                </div>
        </div>
    );
}

export default Game;

