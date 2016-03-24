import React from 'react';
import StartButton from './StartButton';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomGen: [],
      lightSwitch: ['off', 'off', 'off', 'off'],
      gameStarted: false,
      victory: true
    };
  }
  randomGen(){
    if(!this.state.gameStarted){
      this.state.randomGen.push(Math.floor(Math.random()*4));
      this.setState({
        randomGen: this.state.randomGen
      });
      this.state.gameStarted = true;
    }
    if(victory){
      this.state.randomGen.push(Math.floor(Math.random()*4));
      this.setState({
        randomGen: this.state.randomGen
      });
      this.state.gameStarted = true;
    }
  }
  lightUp(){
    for( let buttonId of this.state.randomGen ){
      offOnOff(buttonId);
    }
  }
  render(){
    return(
      <div id='simon'>
        <h1> Simon Says!!!</h1>
        <div className='square'>
          <div className="contents">
            {this.randomGen.bind(this)}
            <button id='1' className={this.state.lightSwitch[1]} onClick={this.checkForVictory.bind(this)} style={style[1]}/>
            <button id='2' className={this.state.lightSwitch[2]} onClick={this.checkForVictory.bind(this)} style={style[2]}/>
            <button id='3' className={this.state.lightSwitch[3]} onClick={this.checkForVictory.bind(this)} style={style[3]}/>
            <button id='4' className={this.state.lightSwitch[4]} onClick={this.checkForVictory.bind(this)} style={style[4]}/>
          </div>
        </div>

        <StartButton lightUp={this.lightUp}/>
      </div>
    );
  }
  offOnOff(buttonId){

    this.state.lightSwitch[buttonId] = 'on';
    this.setState({
      lightSwitch: this.state.lightSwitch
    });

    this.state.lightSwitch[buttonId] = 'off';
    this.setState({
      lightSwitch: this.state.lightSwitch
    });
  }
  checkForVictory(e){
    let index = 0;
    console.log(this);
  }
}

let style ={
  '1 .off': {
    backgroundColor: 'red'
  },
  '2 .off': {
    backgroundColor: 'blue'
  },
  '3 .off': {
    backgroundColor: 'yellow'
  },
  '4 .off': {
    backgroundColor: 'green'
  },
  '1 .on': {
    backgroundColor: 'white'
  },
  '2 .on': {
    backgroundColor: 'white'
  },
  '3 .on': {
    backgroundColor: 'white'
  },
  '4 .on': {
    backgroundColor: 'white'
  }
};
export default App;
