import React, { Component } from 'react';
import '../assets/css/tooltip.css';

class Tooltip extends Component {
  render() {
    let style = '';
    style = styles.leftPosition;
    return (
      <div className="tooltip-container">
        <div className="button">
          Hover Here
          <div
            className="tooltip-message-container"
            style={style.containerPosition}
          >
            Hovered
            <div className="arrow" style={style.arrowPosition}></div>
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
  leftPosition: {
    containerPosition: { right: '107%', top: '16%' },
    arrowPosition: {
      top: '5px',
      right: '-11px',
      borderLeft: '20px solid #1f0e0ecf',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
    },
  },
  rightPosition: {
    containerPosition: { left: '106%', top: '16%' },
    arrowPosition: {
      top: '5px',
      left: '-11px',
      borderRight: '20px solid #1f0e0ecf',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
    },
  },
};

export default Tooltip;
