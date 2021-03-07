import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMacs } from './api'
import { IMacModel } from './types/macs'

const fetchMacsThunk = createAsyncThunk(
  'macs/fetch',
  async (id, thunkAPI) => {
    const response = await fetchMacs()
    return response;
  }
);


interface IMacsState {
  entities: IMacModel[],
  loading: 'idle' | 'loading' | 'loaded',
  favorites: string[],
}

const initialState: IMacsState = {
  entities: [],
  loading: 'idle',
  favorites: [],
};

const macsSlice = createSlice({
  name: 'macs',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    
    // @ts-ignore
    [fetchMacsThunk.pending]: (state, action) => {
      state.loading = 'loading';
      state.entities = [];
    },
    // @ts-ignore
    [fetchMacsThunk.fulfilled]: (state, action) => {
      // Add user to the state array
      state.loading = 'loaded';
      state.entities = action.payload;
    }
  }
})






// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))


//==========================================
export const store = configureStore({
  reducer: {
    macs: macsSlice.reducer,
  }
})



// store.subscribe(() => {
//   console.log(store.getState());
// })

// console.log(store.getState());

store.dispatch(fetchMacsThunk());

export type IRootState = ReturnType<typeof store.getState>


