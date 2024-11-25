import React, { Component } from 'react';
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeKey);
  }
  render() {
    return (
      <div className="overlay" onClick={this.props.close}>
        <div className="modal">
          <img src={this.props.renderImage.nodeValue} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
