import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMacs } from './api'
import { IMacFamily, IMacModel } from './types/macs'
import { ProductStatus } from './types/productStatus';

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
  favorites: IMacFamily[],
  year: string,
  macFamily: IMacFamily,
  status: ProductStatus,
}

const initialState: IMacsState = {
  entities: [],
  loading: 'idle',
  favorites: [],
  year: '',
  macFamily: "MacBook Air",
  status: ProductStatus.buyNow,
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
    },
    setStatus(state, action) {
      state.status = action.payload
    },
    addToFavorites(state, action) {
      if (state.favorites.includes(action.payload)) {
        return;
      } else {
        state.favorites = [...state.favorites, action.payload]
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(mac => mac !== action.payload)
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


export const { selectedYear, setMacFamily, setStatus, addToFavorites, removeFavorite } = macsSlice.actions;


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


