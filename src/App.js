import React, { Component } from 'react';

import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import FeedbackOptions from './components/Feedback';

import styles from './container.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  increaseValue = value => {    
    this.setState(prevState => ({
        [value]: prevState.[value] + 1,
      }
      ))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = ((good / (good + neutral + bad))*100).toFixed(0) + "%";
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.increaseValue}/>
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
}
export default App;
