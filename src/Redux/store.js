import { configureStore } from '@reduxjs/toolkit';

import kageyamaReducer from './KageyamaSlice';

export const store = configureStore({
    reducer: {
        kageyama: kageyamaReducer,
    },
});
