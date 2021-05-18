import React from 'react';

import classes from './Navigation.module.css';

const Navigation = ({breakIsActive, timerIsRunning, longBreakIsActive, turnOnBreakTabHandler, settingsOnHandler}) => {

    const turnOnBreakTab = (value) => {
        if (timerIsRunning) return;
        turnOnBreakTabHandler(value);
    }

    const settingsOn = () => {
        if (timerIsRunning) return;
        settingsOnHandler();
    }

    return (
        <div className={classes.Navigation}>

            <button className={[classes.Navigation__Button, 
                                (!breakIsActive ? classes['Navigation__Button--active'] : null),
                                (timerIsRunning ? classes['Navigation__Button--block'] : null)].join(' ')}
                    onClick={() => turnOnBreakTab(false)}
            >Session</button>

            <button className={[classes.Navigation__Button, 
                                (breakIsActive ? classes['Navigation__Button--active'] : null),
                                (timerIsRunning ? classes['Navigation__Button--block'] : null)].join(' ')}

                    onClick={() => turnOnBreakTab(true)}
            >{ longBreakIsActive ? 'Long Break' : 'Short Break' }</button>

            <button className={[classes.Navigation__Button, 
                                classes['Navigation__Button--settings'], 
                                (timerIsRunning ? classes['Navigation__Button--block'] : null)].join(' ')}
                    onClick={() => settingsOn()}>
                <span className={['material-icons', classes.Navigation__icon].join(' ')}>settings</span>
            </button>

        </div>
    )
}

export default Navigation;