import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div>
        {this.props.isLoad && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#849b87', '#849b87', '#849b87', '#849b87', '#849b87']}
          />
        )}
      </div>
    );
  }
}

export default Loader;
