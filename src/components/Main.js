import ShowDrawing from "./ShowDrawing";
import ShowWord from "./ShowWord";
import Keyboard from "./Keyboard";
import {useState, useEffect} from 'react';
 
const Main = () => {
 
    const [toGuessChars, setToGuessChars] = useState([]);
    const [guessedChars, setGuessedChars] = useState([]);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [testState, setTestState] = useState(0)
    
 
    //didmountin korvike
    useEffect(() => {
        init();
    }, [])
 
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
 
    const init = () => {
        let words = ["monkey", "gorilla"];
        let wordChoice = randomNumber(0, words.length);
 
        setToGuessChars(toGuessChars => words[wordChoice].split(""));
        
        console.log(toGuessChars);
        console.log("lifecycle starts")
    }
 
    const buttonPressed = (event) => {
 
        let playerInput = document.getElementById("inputField").value
        document.getElementById("inputField").value = "";

        //let playerInput = document.getElementById("button_").value
 
        switch (event.key) {
            case 'Enter':
                setGuessedChars(guessedChars + playerInput);
                checkGuess(playerInput, toGuessChars);
                break;
            default:
                break;
        }
    }

    const keyBoardClicked = (letter) => {
        setGuessedChars(guessedChars + letter);
        checkGuess(letter, toGuessChars);
    }
   
 
    const checkGuess = (char, array) => {
        let returnvalue = false;
        
        if(array.includes(char)){
            console.log("ayy");
            returnvalue = true
        }else {
            console.log("nayy");
            setWrongGuessCount(wrongGuessCount +1);
            console.log(wrongGuessCount);
        }
        if (wrongGuessCount == 5) {
            setGameOver(gameOver => true);
        }
        return returnvalue;
    }
 
 
    return (
        <div className="main">
            <ShowDrawing wrongGuessCount={wrongGuessCount} />
            
            {gameOver ? 
            <div> 
                <p id="gameOver">Game over</p>
                <button onClick={() => window.location.reload()}>Reload the game</button>
            </div>
            : 
            <div>
                <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars} /> 
                <Keyboard keyBoardClicked={keyBoardClicked} toGuessChars={toGuessChars}/>
            </div>
            }
            
        </div>
    );
}
 
export default Main