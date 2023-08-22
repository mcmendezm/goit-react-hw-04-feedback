import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div>
    <h2 style={{ color: '#2E97DC' }}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
