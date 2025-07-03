import { configureStore } from '@reduxjs/toolkit'
import useReducer from './useSlices'

const store = configureStore({
    reducer: {
        user: useReducer,
    }
})
export default store