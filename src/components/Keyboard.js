

const Keyboard = (props) => {

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let button = "";

    button = alphabet.map(letter => <button id={"button_"+letter} onClick={() => props.keyBoardClicked(letter)}>{letter}</button>);

    return (
        <div className="keyboardRow">
            {button}
        </div>
    )
}

export default Keyboard