import React, { Component } from 'react';
import '../assets/css/App.css';
import Tooltip from './Tooltip';

class App extends Component {
  constructor(props) {
    super(props);
    // reference for dropdown button
    this.dropdown = React.createRef();
    // state which contains current value of position
    this.state = {
      position: '',
    };
  }

  // function to position value in state when dropdown value changes
  handleOnChange = () => {
    this.setState({ position: this.dropdown.current.value });
  };

  // rendering app component
  render() {
    return (
      <div className="App">
        <div className="heading">Tooltip Demo</div>
        <div className="dropdown-container">
          <div className="dropdown-heading">Position : </div>
          <select
            name="position"
            ref={this.dropdown}
            onChange={this.handleOnChange}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        <Tooltip position={this.state.position} />
      </div>
    );
  }
}

export default App;
