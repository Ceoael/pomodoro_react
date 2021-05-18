import React from 'react';

import classes from './Buttons.module.css';

const Buttons = ({timerIsRunning, resetButtonHandler, startButtonHandler}) => {
    
    const clickHandler = () => {
        if( !timerIsRunning ) resetButtonHandler();
    }

    return (
        <div className={classes.ButtonsWrapper}>
            <button className={[classes.RestartButton, (timerIsRunning ? classes['RestartButton--block'] : null)].join(' ')}
                    onClick={clickHandler}
            >
                <span className={['material-icons', classes.RestartButton__icon].join(' ')}>restart_alt</span>
            </button>
            
            <button className={classes.Button}
                    onClick={startButtonHandler}
            >{ timerIsRunning ? 'Stop' : 'Start' }
            </button>
        </div>
    )

}

export default Buttons;