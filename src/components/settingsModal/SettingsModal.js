import React from 'react';

import Input from '../../shared/components/Input/Input';
import { VALIDATOR_MIN, VALIDATOR_MAX,  VALIDATOR_REQUIRE } from '../../shared/components/Input/validators';

import classes from './SettingsModal.module.css';

const SettingsModal = ({submitHandler, formState, inputHandler,modalOFF}) => {

    return (
        <form 
            onSubmit={submitHandler}
            className={classes.SettingsForm__Form}>
            <Input 
                id="session"
                label="Session:"
                type="number"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0.1), VALIDATOR_MAX(120)]}
                errorText="Please enter a valid session length (between 0.1 and 120)"
                onInput={inputHandler}
                initialValue={formState.inputs.session.value}
                initialValid={formState.inputs.session.isValid}/>
            <Input 
                id="break"
                label="Short Break:"
                type="number"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0.1), VALIDATOR_MAX(30)]}
                errorText="Please enter a valid short break length (between 1 and 15)"
                onInput={inputHandler}
                initialValue={formState.inputs.break.value}
                initialValid={formState.inputs.break.isValid}/>
            <Input 
                id="longBreak"
                label="Long break:"
                type="number"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0.1), VALIDATOR_MAX(120)]}
                errorText="Please enter a valid long break length (between 10 and 120)"
                onInput={inputHandler}
                initialValue={formState.inputs.longBreak.value}
                initialValid={formState.inputs.longBreak.isValid}/>
            <Input 
                id="longBreakInterval"
                label="Long break interval:"
                type="number"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(2), VALIDATOR_MAX(10)]}
                errorText="Please enter a valid long break interval (between 2 and 10)"
                onInput={inputHandler}
                initialValue={formState.inputs.longBreakInterval.value}
                initialValid={formState.inputs.longBreakInterval.isValid}/>

            <div class={classes.SettingsForm__ButtonWrapper}>
                <button type="button"  className={classes.Button} onClick={modalOFF}>CANCEL</button>
                <button type="submit" className={classes.Button} disabled={!formState.isValid}>OK</button>
            </div>

        </form>
    )
}

export default SettingsModal;