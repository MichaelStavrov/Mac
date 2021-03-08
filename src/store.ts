import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMacs } from './api'
import { IMacFamily, IMacModel } from './types/macs'

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
  year: string,
  macFamily: IMacFamily
}

const initialState: IMacsState = {
  entities: [],
  loading: 'idle',
  favorites: [],
  year: '',
  macFamily: "MacBook Air"
};

const macsSlice = createSlice({
  name: 'macs',
  initialState,
  reducers: {
    selectedYear(state, action) {
      state.year = action.payload
    },
    setMacFamily(state, action) {
      state.macFamily = action.payload
    }
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


const { actions } = macsSlice;
export const { selectedYear, setMacFamily } = actions;



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


