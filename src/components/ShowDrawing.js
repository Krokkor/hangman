
import { useState, useEffect } from 'react';

const ShowDrawing = ({wrongGuessCount}) => {

    

    let noose = ["https://i.imgur.com/ig6wbR2.png","https://i.imgur.com/Ot6s4yh.png",
    "https://i.imgur.com/8V4JtdQ.png", "https://i.imgur.com/hEaRvF7.png",
    "https://i.imgur.com/6yuUo2k.png", "https://i.imgur.com/oAfQZJT.png", "https://i.imgur.com/dxHxdqd.png"]
    
    
    
    let image = <img src={noose[wrongGuessCount]}></img>



    return(
        <div className="noose">
            {image}
        </div>
    )
}

export default ShowDrawing