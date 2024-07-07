import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit/";




// thunks example
/* export const getMoviesFetch = createAsyncThunk('movies/getMoviesFetch', async (page = 1) => {
    const data = await getMovies(page);
    return data;
}); */

const scheduleSettingsSlice = createSlice({
    name: 'scheduleSettings',
    initialState: {
        maxDaysRange: undefined,
        holidaysRegular: [{}],
        holidaysIrregular: [],
        hourStartSchedule: undefined,
        hourEndSchedule: undefined,
        schedule: [{}],
    },
    reducers: {
        setMaxDaysRange: (state, action) => {
            state.maxDaysRange = action.payload;
        },
        setHolidaysRegular: (state, action) => {
            state.holidaysRegular = action.payload;
        },

    },
    /* extraReducers: (builder) => {
        builder.addCase()
    } */
})
// slice example
/* export const moviesDBSlice = createSlice({
    name: 'movies_db',
    initialState: {
        movies_sect: {
            movies: [],
            total_pages: null,
            page_num: 1,
            loaded: false,
            loading: false,
            error: null,
            genres: [],
            fetchStrID: '',
            favoritesMovies: [],
            movie_card: [],
        },
    },
    reducers: {
        // movies
        selectMoviesGenres: (state, action) => {
            state.movies_sect.genres = action.payload
        }},
    extraReducers: (builder) => {
        // movies
        builder.addCase(getMoviesFetch.pending, (state, action) => {
            state.movies_sect.loading = true;
            state.movies_sect.loaded = false;
            state.movies_sect.error = false;
            state.movies_sect.movies = [];
        }).addCase(getMoviesFetch.fulfilled, (state, action) => {
            state.movies_sect.loading = false;
            state.movies_sect.loaded = true;
            state.movies_sect.error = null;
            state.movies_sect.movies = action.payload.data.results.map((value) => Object.assign({}, value, { isFavorites: false }));
            for (let card of state.movies_sect.movies) {
                for (let favCard of state.movies_sect.favoritesMovies) {
                    if (card.id === favCard.id) {
                        card.isFavorites = true;
                    }
                }
            };
            state.movies_sect.total_pages = action.payload.data.total_pages;
            state.movies_sect.page_num = action.payload.data.page;
        }).addCase(getMoviesFetch.rejected, (state, action) => {
            state.movies_sect.loading = false;
            state.movies_sect.loaded = true;
            state.movies_sect.error = action.error;
        })}
}); */


// export sync actions
export const { setMaxDaysRange, setHolidaysRegular } = scheduleSettingsSlice.actions;   

// export reducer
export default scheduleSettingsSlice.reducer;