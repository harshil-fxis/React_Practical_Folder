import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/CounterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})