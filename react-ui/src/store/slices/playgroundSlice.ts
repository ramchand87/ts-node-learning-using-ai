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
        setLoadedState: (state, action: PayloadAction<PlaygroundState>) => {
            // Replaces the current state with what we loaded from DB
            state.count = action.payload.count;
            state.textList = action.payload.textList;
        }
    },
});

export const { increment, addText, deleteText, setLoadedState } = playgroundSlice.actions;

export default playgroundSlice.reducer;
