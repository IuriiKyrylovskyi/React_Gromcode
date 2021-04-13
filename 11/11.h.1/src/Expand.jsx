import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

const Expand = ({ isOpen, title, children, handleToggle, degrees }) => {
   return (
     <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">
          {title}
        </span>
        <button
          className="expand__toggle-btn"
          onClick={handleToggle}
          style={{transform: `rotate(${degrees}deg)`}}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      {
        !isOpen
          ? null
          : (<div
              className="expand__content"
            >
              {children}
            </div>)
          }
    </div>
  )
}

// Expand.propTypes = {
//   isOpen: PropTypes.bool,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
//   handleToggle: PropTypes.func.isRequired,
//   degrees: PropTypes.number.isRequired,

// }

// Expand.defaultProps = {
//   isOpen: false,
//   title: '',
// }

export default Expand;