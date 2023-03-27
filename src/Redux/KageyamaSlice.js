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
            state.productData = state.productData.filter((item) => item._id !== action.payload);
        },
        resetCard: (state, action) => {
            state.productData = [];
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);
            if (item) {
                item.quantity += 1;
            }
        },
        // login
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state, action) => {
            state.userInfo = null;
        },
    },
});

export const { addToCard, deleteCard, resetCard, incrementQuantity, decrementQuantity, addUser, removeUser } =
    kageyamaSlice.actions;
export default kageyamaSlice.reducer;
