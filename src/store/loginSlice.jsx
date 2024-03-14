import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginDetails: {},
  isLogin : false,
}

export const loginSlice = createSlice({
  name: 'Login Slice',
  initialState,
  reducers: {
    loginUpdate: (state = initialState, action) => {
   console.log(action);
   return{
        ...state,
        isLogin : true,
        loginDetails: action.payload.data
    
   }
  },
    },
})

// Action creators are generated for each case reducer function
export const { loginUpdate } = loginSlice.actions

export default loginSlice.reducer