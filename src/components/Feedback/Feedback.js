import React from 'react';
import PropTypes from 'prop-types';

import styles from './feedback.module.css'


const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option) => (
                <button type="button" className={styles.feedBtn} key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
           ))} 
        </>
    )
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default Feedback;