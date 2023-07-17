import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    amiibos: [],
    status: 'idle',
    error: null
}

//fetchAmiibos Thunk
export const fetchAmiibos = createAsyncThunk('amiibos/fetchAmiibos', async () => {
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
    const data = await response.json();
    
    const amiibosWithUniqueIds = data.amiibo.map(amiibo => ({
        ...amiibo,
        id: nanoid()
    }))

    return amiibosWithUniqueIds;
});

export const amiibosSlice = createSlice({
    name: 'amiibos',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchAmiibos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAmiibos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.amiibos = state.amiibos.concat(action.payload);
            })
            .addCase(fetchAmiibos.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

export default amiibosSlice.reducer

export const selectAllAmiibos = state => state.amiibos.amiibos