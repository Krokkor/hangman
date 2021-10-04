

const ShowWord = ({toGuessChars, guessedChars}) => {

    
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


    return(
        <div className="showWord">
            {result} <br/>
        </div>
    )
}

export default ShowWord