import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      value:0,
    list: [
        {
            id:1,
            color:"#00ff00",
            name:"Note 1"
        },
           {
            id:2,
            color:"#333333",
            name:"Note 2"
        }
    ],
  },
  reducers: {
    addNote: (state, action) => {
        //state.list= [...state.list, action.payload]
        state.list.push(action.payload)
      },
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {addNote, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer