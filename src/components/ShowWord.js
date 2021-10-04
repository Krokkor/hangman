

const ShowWord = ({toGuessChars, guessedChars, hint, showHint}) => {

    
    let result = "";
    
    //result = toGuessChars.filter(element => guessedChars.includes(element))

    for (let i = 0; i < toGuessChars.length; i++) { 
        
        let letter = toGuessChars[i]
        
        if(guessedChars.includes(letter)){
            result += letter;
        }else {
            result += "*";
        }    
    }

    const hintButtonClicked = () => {
        document.getElementById("hintDiv").innerHTML = hint
    }
    

    return(
        <div className="showWord">
            {result} <br/>
            
            {showHint ?
            <div id="hintDiv">
                <button onClick={hintButtonClicked}>Hint</button>
            </div>
            :
            ""
            }
        </div>
    )
}

export default ShowWord