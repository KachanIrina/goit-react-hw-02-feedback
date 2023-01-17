import React from 'react';
import css from './Statistics.module.css';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  <div className={css.btn}>
    <button type="button" onClick={onIncrementGood} className={css.button}>
      Good
    </button>
    <button type="button" onClick={onIncrementNeutral} className={css.button}>
      Neutral
    </button>
    <button type="button" onClick={onIncrementBad} className={css.button}>
      Bad
    </button>
  </div>;
};

export default FeedbackOptions;
