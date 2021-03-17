import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMacs } from './api'
import { IMacFamily, IMacModel } from './types/macs'
import { ProductStatus } from './types/productStatus';

const fetchMacsThunk = createAsyncThunk<IMacModel[]>(
  'macs/fetch',
  async () => {
    const response = await fetchMacs()
    return response;
  }
);


function loadState () {
  const serializedState = localStorage.getItem('favorites');
  if (serializedState === null) {
    return [];
  }
  try {
    return JSON.parse(serializedState);
  } catch {
    return [];
  }
}

interface IMacsState {
  entities: IMacModel[],
  loading: 'idle' | 'loading' | 'loaded',
  favorites: IMacFamily[],
  macFamily: IMacFamily,
  status: ProductStatus,
}

const initialState: IMacsState = {
  entities: [],
  loading: 'idle',
  favorites: [...loadState()],
  macFamily: "MacBook Air",
  status: ProductStatus.buyNow,
};


const macsSlice = createSlice({
  name: 'macs',
  initialState,
  reducers: {
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
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchMacsThunk.pending, (state, action) => {
      state.loading = 'loading';
      state.entities = [];
    });

    builder.addCase(fetchMacsThunk.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'loaded';
      state.entities = action.payload;
    });
  }
})


export const { setMacFamily, setStatus, addToFavorites, removeFavorite } = macsSlice.actions;


// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

// https://stackoverflow.com/questions/45339448/how-do-you-create-strongly-typed-redux-middleware-in-typescript-from-reduxs-typ



// @ts-ignore
const saveFavoritesToLocalStorage = ({getState}) => next => action => {
  // console.log(getState())
  const result = next(action);

  if ([addToFavorites, removeFavorite].map(String).includes(action.type)) {
    const {macs} = getState();
    localStorage.setItem("favorites", JSON.stringify(macs.favorites));
  }

  return result;
}

//==========================================
export const store = configureStore({
  reducer: {
    macs: macsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveFavoritesToLocalStorage),
})



// store.subscribe(() => {
//   console.log(store.getState());
// })

// console.log(store.getState());

store.dispatch(fetchMacsThunk());

export type IRootState = ReturnType<typeof store.getState>



