import React from 'react';

function DrumPad(props){
    return(
      <button id={props.id} className="drum-pad" onClick={props.handleClick}>{props.InnerText}
        <audio className='clip' id={props.InnerText} src={props.url}></audio>
      </button>  
    );
  }

export default DrumPad;