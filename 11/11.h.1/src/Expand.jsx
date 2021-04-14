import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isExpand, title, children, onToggle }) => {
  const arrowUp = (< svg viewBox = "0 0 448 512" > <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>)
  const arrowDown = (<svg viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>)
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
           {
             !isExpand
              ? <i className="fas fa-chevron-down" 
               >{arrowDown}</i>
              : <i className="fas fa-chevron-up" 
               >{arrowUp}</i>
           }
        </button>
      </div>
      {
        !isExpand
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

Expand.propTypes = {
  isExpand: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
}

Expand.defaultProps = {
  isExpand: false,
  title: '',
}

export default Expand;