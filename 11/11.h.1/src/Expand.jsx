import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropsTypes from 'prop-types';

const Expand = ({ isOpen, title, children, handleToggle }) => {
   return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">
          {title}
        </span>
        <button
          className="expand__toggle-btn"
          onClick={handleToggle}
          style={{transform: `rotate(${deg}deg)`}}
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

export default Expand;