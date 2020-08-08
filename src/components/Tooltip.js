import React, { Component } from 'react';
import '../assets/css/tooltip.css';

class Tooltip extends Component {
  render() {
    const { isHovered } = this.props;
    return (
      <div className="tooltip-container">
        {isHovered ? <h2>ToolTip Hovered</h2> : <h2>Tool tip</h2>}
      </div>
    );
  }
}

export default Tooltip;
