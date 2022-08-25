import React from 'react';
import PropTypes from 'prop-types';

function Span({ children, spanClass }) {
  return (
    <span
      className={ spanClass }
    >
      { children }
    </span>
  );
}

Span.propTypes = {
  spanClass: PropTypes.string,
}.isRequired;

export default Span;
