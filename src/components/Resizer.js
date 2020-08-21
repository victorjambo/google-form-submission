/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Resizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWidth: props.width,
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onMove(e) {
    const { currentWidth } = this.state;
    const { setWidth } = this.props;

    if (e.pageX !== currentWidth && e.pageX >= 200 && e.pageX <= 900) {
      this.setState({ currentWidth: e.pageX });
      setWidth(currentWidth);
    }
  }

  onMouseDown(e) {
    e.preventDefault();

    if (e.button !== 0) return;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp(e) {
    e.preventDefault();

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove(e) {
    e.preventDefault();

    this.onMove(e);
  }

  onTouchStart(e) {
    e.preventDefault();

    document.addEventListener('touchmove', this.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.onTouchEnd, { passive: false });
  }

  onTouchMove(e) {
    e.preventDefault();

    this.onMove(e.touches[0]);
  }

  onTouchEnd(e) {
    e.preventDefault();

    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  }

  render() {
    return (
      <div
        className="ui-resizable-handle ui-resizable-e ui-resizable-index"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        ref={div => { this.handle = div; }}
      />
    );
  }
}

export default Resizer;
