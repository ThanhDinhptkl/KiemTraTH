import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBikes = createAsyncThunk(
  "bikes/fetchBikes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://67319a237aaf2a9aff112759.mockapi.io/bike"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bikeSlice = createSlice({
  name: "bikes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch bikes";
      });
  },
});

export default bikeSlice.reducer;
