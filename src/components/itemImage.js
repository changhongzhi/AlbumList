import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ItemImage extends Component {
  defaultProps() {
    return {      
      showImage: false
    };
  }

  componentDidUpdate(prevProps) {
    if (! this.props.showImage && prevProps.viewport) {
      this.updatePosition();
    }
  }

  updatePosition() {
    var el = ReactDOM.findDOMNode(this);
    this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
  }

  render() {
      var img = this.props.showImage ? this.props.url : this.props.thumbnailUrl;
      return (        
            <img src={img} alt={this.props.alt} />        
    );
  }
}


ItemImage.propTypes = {
   showImage : PropTypes.bool.isRequired,
};

export default ItemImage;