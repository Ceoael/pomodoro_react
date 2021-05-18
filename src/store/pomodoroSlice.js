import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    timerSettings: {
        session: .1,
        shortBreak: .1,
        longBreak: .2,
        longBreakInterval: 2
    },
    sessionTimeLeft: .1*60,
    breakTimeLeft: .1*60,
    sessionsToLongBreak: 2
 };

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        setTimerSettings(state, action) {
            state.timerSettings = action.payload.value;
        },
        setSessionTimeLeft(state, action) {
            state.sessionTimeLeft =  action.payload.value * 60;
        },
        setBreakTimeLeft(state, action) {
            state.breakTimeLeft = action.payload.value * 60;
        },
        setSessionsToLongBreak(state, action) {
            state.sessionsToLongBreak = action.payload.value;
        },
        decrementSessionTimeLeft(state) {
            state.sessionTimeLeft -=  1;
        },
        decrementBreakTimeLeft(state) {
            state.breakTimeLeft -=  1;
        },
        decrementBreakInterval(state) {
            state.sessionsToLongBreak -= 1;
        }
    }
})

export const pomodoroActions = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
