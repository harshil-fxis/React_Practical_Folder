import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

const UserSlices = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }

})

export const { loginSuccess, logout } = UserSlices.actions
export default UserSlices.reducer