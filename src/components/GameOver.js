import React from 'react'

export default function GameOver(props){
    return(props.show?
        <div>
           <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
    </div> 
        </div>:<div></div>
    )
}