import { configureStore } from '@reduxjs/toolkit';

import counter from './reducer/counter'
import user from './reducer/user';

export const store = configureStore({
    reducer: {
        counter,
        user
    }
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
