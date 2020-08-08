import React, { Component } from 'react';
import '../assets/css/App.css';
import Tooltip from './Tooltip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
    };
  }

  handleOnMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
  };

  handleOnMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="heading">Tooltip Demo</div>
        <div className="dropdown-container">
          <div className="dropdown-heading">Position : </div>
          <select name="position">
            <option value="top">Top</option>
            <option value="botton">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        <Tooltip isHovered={this.state.isHovered} />
      </div>
    );
  }
}

export default App;
