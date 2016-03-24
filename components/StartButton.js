import React from 'react';

class StartButton extends React.Component {
  render(){
    return(
      <button id='StartButton' onClick={this.props.lightUp}>Start!</button>
    );
  }
}

export default StartButton;
