import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        style={{
          margin: '4px',
          backgroundColor: '#2874A6 ',
          color: '#fff',
          padding: '5px 8px',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
