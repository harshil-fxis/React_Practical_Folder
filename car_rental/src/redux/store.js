import { combineReducers, configureStore } from '@reduxjs/toolkit'
import useReducer from './useSlices'
import { persistReducer, persistStore } from 'redux-persist'
// import { combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persisConfig = {
    key: 'root',
    storage,
    // whitelist: ['user']
}

const rootReducer = combineReducers({
    user: useReducer
})

const persistedReducer = persistReducer(persisConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)
export default store
















// import { configureStore } from '@reduxjs/toolkit'
// import useReducer from './useSlices'

// const store = configureStore({
//     reducer: {
//         user: useReducer,
//     }
// })
// export default store