import { createSlice } from ("@reduxjs/toolkit");


const initialState = [
    {
        id: 1,         // for counter 1
        value: 0
    },
    {
        id: 2,          // for counter 2
        value: 0
    },
]

const countersSlice = createSlice({
    name: "counters",
    initialState,             // in ES6 shortcut name and value same
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex((c) => c.id === action.payload); // we can get the conter id by action.payload
            state[counterIndex].value++
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex((c) => c.id === action.payload);
            state[counterIndex].value--
        },
    }
})

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;