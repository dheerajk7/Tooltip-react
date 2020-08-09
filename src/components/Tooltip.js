import React, { Component } from 'react';
import '../assets/css/tooltip.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    // state to maintain whether button is hovered or not
    this.state = {
      isHovered: false,
    };
  }

  // changing hovered to true when button is hovered
  handleMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
  };

  // changing hovered to false when button is not hovered
  handleMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
  };

  // rendering tooltip container
  render() {
    // getting position of the tooltip message container from props
    const { position } = this.props;
    let style = '';
    // setting current position styles based on position received from props;
    if (position === 'top') {
      style = styles.topPosition;
    } else if (position === 'bottom') {
      style = styles.bottomPosition;
    } else if (position === 'left') {
      style = styles.leftPosition;
    } else if (position === 'right') {
      style = styles.rightPosition;
    } else {
      style = styles.topPosition;
    }
    // getting current hovered status
    const { isHovered } = this.state;
    return (
      <div className="tooltip-container">
        <div
          className="button"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Hover Here
          {isHovered && (
            <div
              className="tooltip-message-container"
              style={style.containerPosition}
            >
              Hovered
              <div className="arrow" style={style.arrowPosition}></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// styles of tooltip container position and arrow position based on different position
const styles = {
  // for bottom position
  bottomPosition: {
    containerPosition: { top: '120%', left: '12%' },
    arrowPosition: {
      top: '-12px',
      right: '20px',
      borderBottom: '20px solid #1f0e0ecf',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
    },
  },
  // for top position
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
  // for left position
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
  // for right position
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
