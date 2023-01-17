import FeedbackOptions from './FeedbackOptions';
import css from './Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export class Statistics extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    total: 0,
    feedback: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  hendleIncrementGood = good => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  hendleIncrementNeutral = neutral => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  hendleIncrementBad = neutral => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>

        <FeedbackOptions
          onIncrementGood={this.hendleIncrementGood}
          onIncrementNeutral={this.hendleIncrementNeutral}
          onIncrementBad={this.hendleIncrementBad}
        />

        <div className={css.stats}>
          <h2 className={css.title}>Statistics</h2>
          <span>Good: {this.state.good}</span>
          <span>Neunral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total:</span>
          <span>Positive feedback:</span>
        </div>
      </div>
    );
  }
}
