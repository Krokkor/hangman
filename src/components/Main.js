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

        console.log(toGuessChars);
        console.log("lifecycle starts")
    }

    const keyBoardClicked = (letter) => {
        setGuessedChars(guessedChars + letter);
        checkGuess(letter, toGuessChars);
        document.getElementById("button_"+letter).disabled = true;
    }
   
 
    const checkGuess = (char, array) => {
        let returnvalue = false;
        
        if(array.includes(char)){
            console.log("ayy");
            returnvalue = true
        }else {
            console.log("nayy");
            setWrongGuessCount(wrongGuessCount + 1);
            console.log(wrongGuessCount);
        }

        switch (wrongGuessCount) {
            case 5:
                setGameOver(gameOver => true);
                break;
            
            case 3:
                setShowHint(showHint => true);
                break;
            default:
                break;
        }

        return returnvalue;
    }
 
 
    return (
        <div className="main">
            <h3 className="hangmanTitle">Hanged man</h3>

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
    );
}
 
export default Main