import { useState, useMemo } from 'react';

import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import FeedbackOptions from './components/Feedback';

import styles from './container.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const totalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const percentage = useMemo(() => {
    const calc = ((good / totalFeedback) * 100).toFixed(0) + "%";
    return calc;
  }, [good, totalFeedback]);

  const increaseValue = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1 );
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={increaseValue}/>
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ?
          <Notification message="No feedback given" /> :            
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentage}
          />
        }             
      </Section>
    </div>
  );
}
