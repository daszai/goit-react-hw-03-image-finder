import { Searchbar } from './Searchbar/Searchbar';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    serach: '',
  };

  onSubmit = e => {
    e.preventDefault();
    if (e.currentTarget.elements[1].value !== '') {
      this.setState({ serach: e.currentTarget.elements[1].value });
    } else this.setState({ serach: '' });
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery serach={this.state.serach} />
      </div>
    );
  }
}
