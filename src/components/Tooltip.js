import React, { Component } from 'react';
import '../assets/css/tooltip.css';

class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip-container">
        <div className="button">
          Hover Here
          <div className="tooltip-message-container message-container-position-right ">
            Hovered
            <div className="arrow left-arrow"></div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  downPosition: {
    containerPosition: { top: '120%', left: '12%' },
    arrowPosition: {
      top: '-12px',
      right: '20px',
      borderBottom: '20px solid #1f0e0ecf',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
    },
  },
  topPosition: {
    containerPosition: { bottom: '120%', left: '12%' },
    arrowPosition: {
      top: '42px',
      left: '37px',
      borderTop: '20px solid #1f0e0ecf',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
    },
  },
  topPosition: {
    containerPosition: {},
    arrowPosition: {},
  },
  bottomPosition: {
    containerPosition: {},
    arrowPosition: {},
  },
};

export default Tooltip;
