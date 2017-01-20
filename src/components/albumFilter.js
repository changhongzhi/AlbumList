import React, { Component, PropTypes } from 'react';
import Pager from 'react-pager';

class AlbumFilter extends Component {   

    handlePageChanged(newPage) {        
        this.props.onPageChange(newPage + 1);
    }

    render() {
        return (
            <div>               
                <Pager total={this.props.total} current={this.props.current - 1} visiblePages={7} className="pagination-sm col-md-4 col-md-push-4"
                    onPageChanged={this.handlePageChanged.bind(this)} />
            </div>
        );
    }
}

AlbumFilter.propTypes = {
    total:    PropTypes.number.isRequired,
    current:  PropTypes.number.isRequired
};

export default AlbumFilter;