import { configureStore } from '@reduxjs/toolkit';

import pomodoroSlice from './pomodoroSlice';

const store = configureStore({
    reducer: { pomodoro: pomodoroSlice }
})

export default store;
