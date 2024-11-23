import React, { Component } from 'react';
class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="imageGalleryItem">
        <img
          className="imageGalleryItem-image"
          src={this.props.data.webformatURL}
          alt={this.props.data.tags}
          onClick={this.props.klick}
          data-large={this.props.data.largeImageURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
