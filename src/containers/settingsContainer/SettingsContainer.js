import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsModal from '../../components/settingsModal/SettingsModal';
import { useForm } from './../../shared/hooks/form-hooks';

import { pomodoroActions } from './../../store/pomodoroSlice';

const SettingsContainer = ({modalOFF, timerSettings}) => {
    const dispatch = useDispatch();

    const [formState, inputHandler] = useForm({
        session: {
            value: timerSettings.session || 25,
            isValid: true
        },
        break: {
            value: timerSettings.shortBreak || 5,
            isValid: true
        },
        longBreak: {
            value: timerSettings.longBreak || 15,
            isValid: true
        },
        longBreakInterval: {
            value: timerSettings.longBreakInterval || 2,
            isValid: true
        }
    }, false);

    const saveSettingsHandler = (settingsData) => {
        const newSettings = objectValuesToNumber(settingsData);
        dispatch(pomodoroActions.setTimerSettings({value: newSettings}));

        modalOFF();
    }

    const submitHandler = event => {
        event.preventDefault();

        saveSettingsHandler({
            session: formState.inputs.session.value,
            shortBreak: formState.inputs.break.value,
            longBreak: formState.inputs.longBreak.value,
            longBreakInterval: formState.inputs.longBreakInterval.value,
        })
    }

    function objectValuesToNumber (settingsData) {
        const formattedObject = {};
        for ( const[key, value] of Object.entries(settingsData)) {
            formattedObject[key] = +value;
        }
        return formattedObject;
    }
    
    return (
        <React.Fragment>
            <SettingsModal
                submitHandler={submitHandler}
                formState={formState}
                inputHandler={inputHandler}
                modalOFF={modalOFF}/>
        </React.Fragment>
    )
};

export default SettingsContainer;
