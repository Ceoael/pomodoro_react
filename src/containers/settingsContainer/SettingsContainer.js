import React, {useState, useEffect} from 'react';

import SettingsModal from '../../components/settingsModal/SettingsModal';
import { useForm } from './../../shared/hooks/form-hooks';

const SettingsContainer = (props) => {
    const [formState, inputHandler] = useForm({
        session: {
            value: props.timerSettings.pomodoro || 25,
            isValid: true
        },
        break: {
            value: props.timerSettings.shortBreak || 5,
            isValid: true
        },
        longBreak: {
            value: props.timerSettings.longBreak || 15,
            isValid: true
        },
        longBreakInterval: {
            value: props.timerSettings.longBreakInterval || 2,
            isValid: true
        }
    }, false);

    const saveSettingsHandler = (settings) => {
        props.saveSettings(settings);
        props.modalOFF();
    }

    const submitHandler = event => {
        event.preventDefault();

        saveSettingsHandler({
            pomodoro: formState.inputs.session.value,
            shortBreak: formState.inputs.break.value,
            longBreak: formState.inputs.longBreak.value,
            longBreakInterval: formState.inputs.longBreakInterval.value,
        })
    }
    
    return (
        <React.Fragment>
            <SettingsModal
                modalOpen = {props.modalOpen}
                submitHandler = {submitHandler}
                formState= {formState}
                inputHandler = {inputHandler}
                modalOFF = {() => props.modalOFF()}/>
        </React.Fragment>
    )
};

export default SettingsContainer;
