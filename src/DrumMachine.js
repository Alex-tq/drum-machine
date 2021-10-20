import React from 'react';
import Display from './Display'
import DrumPad from './DrumPad'

class DrumMachine extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        display: ''
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
    } 
    handleClick(event){
      let sound = event.target.children.item(0);
      sound.currentTime=0;
      sound.play();
      this.setState({
        display: event.target.id
      })
    }
    handleKeyDown(event){
      let sound = document.getElementById(event.key.toUpperCase());
      sound.currentTime=0;
      sound.play();
      
      this.setState(() =>{
        switch(event.keyCode){
          case 81:  
            return {display: 'Heater-1'}
          case 87:  
            return {display: 'Heater-2'}
          case 69:  
            return {display: 'Heater-3'}
          case 65:  
            return {display: 'Heater-4'}
          case 83:  
            return {display: 'clap'}
          case 68:  
            return {display: 'open-hh'}
          case 90:  
            return {display: 'Kick-n-hat'}
          case 88:  
            return {display: 'kick'}
          case 67:  
            return {display: 'close-hh'}
        }
      })
    }
    
      render(){
        document.addEventListener("keydown", this.handleKeyDown)
          
        return(
          <div id="drum-machine">
            <Display display={this.state.display}/>
            <div id='drum-pad-container'>
              <DrumPad 
                handleClick={this.handleClick}
                InnerText='Q'
                id='Heater-1'
                url='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
              />
              <DrumPad 
                handleClick={this.handleClick}
                InnerText='W'
                id='Heater-2'
                url='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
              />
              <DrumPad
                handleClick={this.handleClick}
                InnerText='E'
                id='Heater-3'
                url='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
              />
              <DrumPad 
                handleClick={this.handleClick}
                InnerText='A'
                id='Heater-4'
                url='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
              />
              <DrumPad
                handleClick={this.handleClick}
                InnerText='S'
                id='clap'
                url='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
              />
              <DrumPad
                handleClick={this.handleClick}
                InnerText='D'
                id='open-hh'
                url='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
              />
              <DrumPad
                handleClick={this.handleClick}
                InnerText='Z'
                id='kick-n-hat'
                url='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
              />
              <DrumPad 
                handleClick={this.handleClick}
                InnerText='X'
                id='kick'
                url='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
              />
              <DrumPad
                handleClick={this.handleClick}
                InnerText='C'
                id='Close-hh'
                url='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
              />
            </div>
          </div>
        );
      } 
  }

export default DrumMachine;