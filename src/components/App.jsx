import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

function App() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackState;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const handleLeaveFeedback = feedback => {
    setFeedbackState(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const feedbackOptions = Object.keys(feedbackState);

  return (
    <div>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistics
            good={feedbackState.good}
            neutral={feedbackState.neutral}
            bad={feedbackState.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
