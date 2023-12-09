import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good +neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positive = Math.round((good * 100) / totalFeedback);

    return Number.isNaN(positive) ? 0 : positive;
  }

  onLeaveFeedback = opt => {
    this.setState(prevState => ({ [opt]: prevState[opt] + 1 }));
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    
    return (
      <div
        style={{
          heigheight: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      > 
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
        <Section title="Statistic">
          {totalFeedback > 0 ? (<Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}> 
          </Statistics>) 
          :
          (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
