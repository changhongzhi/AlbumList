import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/appActions';
import PhotoItem from './components/photoItem';
import AlbumFilter from './components/albumFilter';
import './css/App.css';
import './css/bootstrap.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      viewport: {
        top: 0,
        height: 0
      }
    };
  };

  componentWillMount() {
    this.props.getPhotos();
  }

  componentDidMount() {    
    window.addEventListener('scroll', this.updateViewport.bind(this), false);
    window.addEventListener('resize', this.updateViewport.bind(this), false);
    this.updateViewport();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateViewport.bind(this));
    window.removeEventListener('resize', this.updateViewport.bind(this));
  }

  updateViewport() {
    this.setState({
      viewport: {
        top: window.pageYOffset,
        height: window.innerHeight
      }
    });
  }

  onPageChange(newId) {
    this.props.onPageChange(newId);
  }

  render() {
    var self = this;
    var num = 0;
    return (
      <div class="col-sm-6 col-md-3">
        <div className="App-header">
          <AlbumFilter current={this.props.currentAlbum} total={this.props.totalAlbumNumber} onPageChange={this.onPageChange.bind(this)} />
        </div>
        <div className="App">      
          {this.props.photos.map((photo, i) => {
            let showImage = false;            
            if(photo.albumId === self.props.currentAlbum){
              if(num < 3)
                showImage = true;
              num ++ ;
              return (<PhotoItem key={i} title={photo.title} url={photo.url} thumbnailUrl={photo.thumbnailUrl} albumId={photo.albumId} viewport={self.state.viewport} showImage={showImage} />);
            }            
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  photos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    photos: state.app.photos,
    currentAlbum: state.app.currentAlbum,
    totalAlbumNumber: state.app.totalAlbumNumber
  }
}

export default connect(mapStateToProps, actions)(App);
