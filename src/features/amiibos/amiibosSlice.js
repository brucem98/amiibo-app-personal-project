import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    amiibos: [
{id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.', 
    'release': {
        'au': '2014-11-29',
        'eu': '2014-11-28',
        'jp': '2014-12-06',
        'na': '2014-11-21'
    }
},
{id: '2', name: 'Luigi', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Mario Bros.',
    'release': {
        'au': '2014-11-29',
        'eu': '2014-11-28',
        'jp': '2014-12-06',
        'na': '2014-11-21'
    }
},
{id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros',
    'release': {
        'au': '2014-11-29',
        'eu': '2014-11-28',
        'jp': '2014-12-06',
        'na': '2014-11-21'
    } 
},
{id: '4', name: 'Isabelle - Summer Outfit', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-024b0502.png', gameSeries: 'Animal Crossing', amiiboSeries: 'Animal Crossing',
    'release': {
        'au': '2014-11-29',
        'eu': '2014-11-28',
        'jp': '2014-12-06',
        'na': '2014-11-21'
    } 
},
{id: '5', name: 'Link - Tears of the Kingdom', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-04180902.png', gameSeries: 'The Legend of Zelda', amiiboSeries: 'Legend Of Zelda',
    'release': {
        'au': '2014-11-29',
        'eu': '2014-11-28',
        'jp': '2014-12-06',
        'na': '2014-11-21'
    } 
},
{id: '6', name: 'Shovel Knight', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_35c00000-02500a02.png', gameSeries: 'Shovel Knight', amiiboSeries: 'Shovel Knight',
'release': {
    'au': '2014-11-29',
    'eu': '2014-11-28',
    'jp': '2014-12-06',
    'na': '2014-11-21'
} 
}
],
    status: 'idle',
    error: null
}

//fetchAmiibos Thunk
export const fetchAmiibos = createAsyncThunk('amiibos/fetchAmiibos', async () => {
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
    const data = await response.json();
    return data;
});

console.log('testing fetch request',fetchAmiibos())

export const amiibosSlice = createSlice({
    name: 'amiibos',
    initialState,
    reducers: {

    },

})

export default amiibosSlice.reducer

export const selectAllAmiibos = state => state.amiibos.amiibos