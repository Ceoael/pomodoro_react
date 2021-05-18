import React from 'react';

import classes from './pomodoroBuilderWrapper.module.css';

const PomodoroBuilderWrapper = (props) => {
    return (
        <div className={classes.PomodoroBuilderWrapper}>
            {props.children}
        </div>
    )
}

export default PomodoroBuilderWrapper;
