import ShowDrawing from "./ShowDrawing";
import ShowWord from "./ShowWord";
import Keyboard from "./Keyboard";
import {useState, useEffect} from 'react';
 
const Main = () => {
 
    const [toGuessChars, setToGuessChars] = useState([]);
    const [guessedChars, setGuessedChars] = useState([]);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [hint, setHint] = useState([])
    const [showHint, setShowHint] = useState(false);
    const [victory, setVictory] = useState(false);
    const [correctGuess, setCorrectGuess] = useState([]);
 
    //didmountin korvike
    useEffect(() => {
        init();
    }, [])
 
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
 
    const init = () => {
        let words = ["monkey", "gorilla"];
        let hints = ["A tree-dewelling primate", "The largest living primate"]
        let wordChoice = randomNumber(0, words.length);
 
        setToGuessChars(toGuessChars => words[wordChoice].split(""));
        setHint(hint => hints[wordChoice]);

        // console.log(toGuessChars);
        // console.log("lifecycle starts")
    }

    const keyBoardClicked = (letter) => {
        setGuessedChars(guessedChars + letter);
        checkGuess(letter, toGuessChars);
        document.getElementById("button_"+letter).disabled = true;
        //console.log(guessedChars);
    }
   
 
    const checkGuess = (char, array) => {
        let returnvalue = false;
        
        if(array.includes(char)){
            returnvalue = true
            correctGuess.push(char)
            setCorrectGuess(correctGuess);
        }else {
            setWrongGuessCount(wrongGuessCount + 1);
        }

        switch (wrongGuessCount) {
            case 5:
                setGameOver(gameOver => true);
                break;
            
            case 2:
                setShowHint(showHint => true);
                break;
            default:
                break;
        }

        //checks unique letters in array so I can compare them to correctly
        //guessed letters, because duplicates don't get registered in length of guessed chars
        const winRequirementUniques = new Set(toGuessChars);
        const winRequirement = Array.from(winRequirementUniques).length;

        switch (correctGuess.length) {
            case winRequirement:
                console.log("voitto")
                setVictory(victory => true);
                break;
        
            default:
                break;
        }

        return returnvalue;
    }
 
    //add victorystate displaying win when winrequirement is fulfilled.
    return (
        <div className="main">
            <h3 className="hangmanTitle">Hanged man</h3>

            <div>
                <ShowDrawing wrongGuessCount={wrongGuessCount} />
            
                {gameOver ? 
                <div> 
                    <p id="gameOver">Game over</p>
                    <button onClick={() => window.location.reload()}>Reload the game</button>
                </div>
                : 
                <div className="col d-inline-block">
                    <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars} wrongGuessCount={wrongGuessCount} hint={hint} showHint={showHint} /> 
                    <Keyboard keyBoardClicked={keyBoardClicked} toGuessChars={toGuessChars}/>
                </div>
                }
            </div>
            
        </div>
    );
}
 
export default Main