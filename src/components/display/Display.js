import React from 'react';

import classes from './Display.module.css';

const Display = ({breakIsActive, currentBreakTime, currentSessionTime}) => {

    const displayedValue = () => {
        return breakIsActive ? currentBreakTime : currentSessionTime;
    }

    return (
        <div className={classes.Display}>
            <p className={classes.Display__value}>
                { displayedValue() || '00:00' }
            </p>
        </div>
    )
}

export default Display;