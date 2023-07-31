import { filteredAmiibos } from "../__testsSetUp/TestFunctions";

export const amiibosArray = [
{id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.'},
{id: '2', name: 'Luigi', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Mario Bros.'},
{id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'}
]

it("Jest is working!", ()=>{})

describe('filteredAmiibos', () => {
    it("filters amiibos array based on the query", () => {
        //arrange
        const nameQuery='Captain Falcon'
        const gameSeriesQuery='Super Mario'
        const amiiboSeries = 'Super Smash Bros'
        const expectedResult = [{id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'}]
        const expectedResult2 = [{id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.'},
                                {id: '2', name: 'Luigi', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Mario Bros.'},]
        const expectedResult3 = [{id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.'},
                                {id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'}]             
        //act                       
        const actualfilteredAmiibosResult = filteredAmiibos(amiibosArray, nameQuery)
        const actualfilteredAmiibosResult2 = filteredAmiibos(amiibosArray, gameSeriesQuery)
        const actualfilteredAmiibosResult3 = filteredAmiibos(amiibosArray, amiiboSeries)
        //assert
        expect(actualfilteredAmiibosResult).toBeDefined()
        expect(actualfilteredAmiibosResult).toEqual(expectedResult)
        expect(actualfilteredAmiibosResult).toHaveLength(1)
        expect(actualfilteredAmiibosResult2).toBeDefined()
        expect(actualfilteredAmiibosResult2).toEqual(expectedResult2)
        expect(actualfilteredAmiibosResult2).toHaveLength(2)
        expect(actualfilteredAmiibosResult3).toBeDefined()
        expect(actualfilteredAmiibosResult3).toEqual(expectedResult3)
        expect(actualfilteredAmiibosResult3).toHaveLength(2)  
    })

    it("returns an empty array when no matching amiibo is found", () => {
        const query= 'amiibonotfound'
        const actualfilteredAmiibosResult = filteredAmiibos(amiibosArray, query)

        expect(actualfilteredAmiibosResult).toBeDefined()
        expect(actualfilteredAmiibosResult).toEqual([])
    })
})