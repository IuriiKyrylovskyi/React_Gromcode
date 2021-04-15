import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends Component{
  state = {
    isExpanded: false,
  }
  
  onToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  
  render() {
    const { isExpanded } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
        <span className="expand__title">
          {this.props.title}
        </span>
        <button
          className="expand__toggle-btn"
          onClick={this.onToggle}
          >
          {isExpanded ? (
            <i className="fas fa-chevron-up"/>
            ) : (
              <i className="fas fa-chevron-down"/>
          )}
          {/* {isExpanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
            ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )} */}
        </button>
      </div>
      {isExpanded && (
        <div
        className="expand__content"
        >
          {this.props.children}
        </div>
      )}
    </div>
    ) 
  }
} 

Expand.propTypes = {
  isExpanded: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onToggle: PropTypes.func,
}

Expand.defaultProps = {
  isExpanded: false,
  title: '',
}

export default Expand;