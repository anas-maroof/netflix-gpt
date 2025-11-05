import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpcomingMovies: null,
    nowSeries: null,
    nowSeriesAir: null,
    nowSeriesRated: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },
    addSeries: (state, action) => {
      state.nowSeries = action.payload;
    },
    addSeriesRated: (state, action) => {
      state.nowSeriesRated = action.payload;
    },
    addSeriesAir: (state, action) => {
      state.nowSeriesAir = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSeries,
  addSeriesAir,
  addSeriesRated,
} = moviesSlice.actions;
export default moviesSlice.reducer;
