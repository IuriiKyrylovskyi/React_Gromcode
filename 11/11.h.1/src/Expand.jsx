import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isExpanded, title, children, onToggle }) => {
  return (
     <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">
          {title}
        </span>
        <button
          className="expand__toggle-btn"
          onClick={onToggle}
         >
           {isExpanded ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
        </button>
      </div>
      {isExpanded && (
        <div
          className="expand__content"
        >
          {children}
        </div>
      )}
    </div>
  )
}

Expand.propTypes = {
  isExpanded: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
}

Expand.defaultProps = {
  isExpanded: false,
  title: '',
}

export default Expand;