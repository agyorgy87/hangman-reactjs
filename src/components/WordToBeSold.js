import React from 'react';
import "../css/Game.css";

const WordToBeSold = ({showWordToBeDechipered, wordToBeDeciphered}) => {
  return ( 
    <div className="secret-word-container">
        {showWordToBeDechipered ? 
            <div>
                <p className="play-text-title">Push the start button to play!</p>
            </div>
            :
            <div>
                {wordToBeDeciphered.map((element, index) => 
                    <div className="secret-letter" key={"deciphered" + index}> {element} </div>)}
            </div>
        }
    </div>
  )
}

export default WordToBeSold