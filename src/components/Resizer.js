/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ViewContext } from '../context/Views';

class ResizerComponent extends Component {
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

    const { currentWidth } = this.state;
    const { setStorageWidth } = this.props;
    setStorageWidth(currentWidth);
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

ResizerComponent.propTypes = {
  width: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
  setStorageWidth: PropTypes.func.isRequired,
};

const Resizer = () => {
  const [,, width, setWidth, pinned,,, setStorageWidth] = useContext(ViewContext);

  useEffect(() => {
    const html = document.getElementsByTagName('html');
    const nav = document.getElementById('submissio');

    if (pinned) {
      nav.style = `width: ${width}px`;
      html[0].setAttribute('style', `margin-left: ${width}px`);
    }
  }, [width]);

  return (
    <ResizerComponent width={width} setWidth={setWidth} setStorageWidth={setStorageWidth} />
  );
};

export default Resizer;
