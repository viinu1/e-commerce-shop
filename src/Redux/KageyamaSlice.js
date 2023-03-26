import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [],
    userInfo: null,
};

export const kageyamaSlice = createSlice({
    name: 'kageyama',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteCard: (state, action) => {
            state.productData.filter((item) => item._id !== action.payload);
        },
        resetCard: (state, action) => {
            state.productData = [];
        },
    },
});

export const { addToCard } = kageyamaSlice.actions;
export default kageyamaSlice.reducer;
