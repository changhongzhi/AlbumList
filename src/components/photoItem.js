import React, { Component, PropTypes } from 'react';
import ItemImage from './itemImage';

class PhotoItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showImage: false
    };
  };

  defaultProps() {
      return {
          showImage: false
      }
  }

  componentWillMount() {
      if(this.props.showImage) {          
              this.setShowImage(true);          
      }
  }

  setShowImage(show) {
      this.setState({
          showImage: show
      });
  }

  updateImagePosition(top, height) {
      if (this.state.showImage) {
      return;
    }

    // update showImage state if component element is in the viewport
    var min = this.props.viewport.top;
    var max = this.props.viewport.top + this.props.viewport.height;

    if ((min <= (top + height) && top <= (max - 300))) {
      this.setShowImage(true);
    }
  }

  render() {
      return (
        <div>
            <h2>{this.props.title}</h2>
            <ItemImage thumbnailUrl={this.props.thumbnailUrl} url={this.props.url} alt={this.props.title} showImage={this.state.showImage} 
                    updateImagePosition={this.updateImagePosition.bind(this)} viewport={this.props.viewport} />
        </div>
    );
  }
}


PhotoItem.propTypes = {
    title:         PropTypes.string.isRequired,
    thumbnailUrl:  PropTypes.string.isRequired,
    url:           PropTypes.string.isRequired,
    viewport:      PropTypes.object.isRequired
};

export default PhotoItem;