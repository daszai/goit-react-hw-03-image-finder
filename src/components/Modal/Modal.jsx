import React, { Component } from 'react';
class Modal extends Component {
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
