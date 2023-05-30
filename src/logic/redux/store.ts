import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// import userReducer  from 'app/redux/features/userSlice';
// import viewModelsReducer  from 'app/redux/features/vms';
import controllerReducer  from './controllers';
import generalReducer  from './general';



export const store = configureStore({
  reducer: {
    controllers : controllerReducer,
    generalReducer : generalReducer,
    // repositories : repositoriesReducer,
    // user: userReducer,
    // viewModels : viewModelsReducer,
    // homePageReducer : homePageRReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;