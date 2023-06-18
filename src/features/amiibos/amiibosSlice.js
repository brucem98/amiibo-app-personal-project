import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.'},
    {id: '2', name: 'Luigi', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Mario Bros.'},
    {id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'},
    {id: '4', name: 'Isabelle - Summer Outfit', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810000-024b0502.png', gameSeries: 'Animal Crossing', amiiboSeries: 'Animal Crossing'},
    {id: '5', name: 'Link - Tears of the Kingdom', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-04180902.png', gameSeries: 'The Legend of Zelda', amiiboSeries: 'Legend Of Zelda'},
    {id: '6', name: 'Shovel Knight', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_35c00000-02500a02.png', gameSeries: 'Shovel Knight', amiiboSeries: 'Shovel Knight'}
]

export const amiibosSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },

})

export default amiibosSlice.reducer