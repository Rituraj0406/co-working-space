import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../api";

interface DataState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const data = await fetchDataFromApi();
    return data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch data';
        });
    },
  });
  
  export default dataSlice.reducer;
