import  reducer  from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
let persistor = persistStore(store)

export {store,persistor}

