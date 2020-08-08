import React, { Component } from 'react';
import '../assets/css/tooltip.css';

class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip-container">
        <div className="button">Hover Here</div>
        <div className="tooltip-message-container message-container-position-bottom ">
          Hovered
          <div className="arrow upper-arrow"></div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
