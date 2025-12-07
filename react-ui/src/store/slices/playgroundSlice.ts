import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PlaygroundState {
    count: number;
    textList: string[];
}

const initialState: PlaygroundState = {
    count: 0,
    textList: [],
};

export const playgroundSlice = createSlice({
    name: 'playground',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        addText: (state, action: PayloadAction<string>) => {
            state.textList.push(action.payload);
        },
        deleteText: (state, action: PayloadAction<number>) => {
            state.textList = state.textList.filter((_, index) => index !== action.payload);
        },
    },
});

export const { increment, addText, deleteText } = playgroundSlice.actions;

export default playgroundSlice.reducer;
