import React from 'react';

import Input from '../../shared/components/Input/Input';
import { VALIDATOR_MIN, VALIDATOR_MAX,  VALIDATOR_REQUIRE } from '../../shared/components/Input/validators';
import Backdrop from '../../shared/components/Backdrop/Backdrop';
import Modal from '../../shared/components/Modal/Modal';

import classes from './SettingsModal.module.css';

const SettingsModal = ({modalOpen, modalOFF, submitHandler, formState, inputHandler}) => {

    return (
        <React.Fragment>
            <Backdrop 
                show={modalOpen}
                clicked={modalOFF}/>
            <Modal
                modalOpen={modalOpen}
                modalName={"Timer Settings"}
                modalOFF={modalOFF}>
                <form 
                    onSubmit={submitHandler}
                    className={classes.SettingsModal__Form}>
                    <Input 
                        id="session"
                        label="Session:"
                        type="number"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(5), VALIDATOR_MAX(240)]}
                        errorText="Please enter a valid session length (between 5 and 240)"
                        onInput={inputHandler}
                        initialValue={formState.inputs.session.value}
                        initialValid={formState.inputs.session.isValid}/>
                    <Input 
                        id="break"
                        label="Short Break:"
                        type="number"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1), VALIDATOR_MAX(15)]}
                        errorText="Please enter a valid short break length (between 1 and 15)"
                        onInput={inputHandler}
                        initialValue={formState.inputs.break.value}
                        initialValid={formState.inputs.break.isValid}/>
                    <Input 
                        id="longBreak"
                        label="Long break:"
                        type="number"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(10), VALIDATOR_MAX(120)]}
                        errorText="Please enter a valid long break length (between 10 and 120)"
                        onInput={inputHandler}
                        initialValue={formState.inputs.longBreak.value}
                        initialValid={formState.inputs.longBreak.isValid}/>
                    <Input 
                        id="longBreakInterval"
                        label="Long break interval:"
                        type="number"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0), VALIDATOR_MAX(5)]}
                        errorText="Please enter a valid long break interval (between 0 and 5)"
                        onInput={inputHandler}
                        initialValue={formState.inputs.longBreakInterval.value}
                        initialValid={formState.inputs.longBreakInterval.isValid}/>
                    <button 
                        className={classes.SettingsModal__okButton}
                        type="submit" 
                        disabled={!formState.isValid}>OK</button>
                </form>
            </Modal>
        </React.Fragment>
    )
}

export default SettingsModal;