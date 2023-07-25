import { filteredAmiibos } from "../__testsSetUp/TestFunctions";

export const amiibosArray = [
{id: '1', name: 'Mario', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Smash Bros.'},
{id: '2', name: 'Luigi', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png', gameSeries: 'Super Mario', amiiboSeries: 'Super Mario Bros.'},
{id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'}
]

it("Jest is working!", ()=>{})

it("filters amiibos array based on the query", () => {
    //arrange
    const query='Captain Falcon'
    const expectedResult = [{id: '3', name: 'Captain Falcon', image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_06000000-00120002.png', gameSeries: 'F-Zero', amiiboSeries: 'Super Smash Bros'}]

    //act
    const actualfilteredAmiibosResult = filteredAmiibos(amiibosArray, query)

    //assert
    expect(actualfilteredAmiibosResult).toEqual(expectedResult)
    expect(actualfilteredAmiibosResult).toHaveLength(1)
})

it("returns an empty array when no matching amiibo is found", () => {
    const query= 'amiibonotfound'
    const actualfilteredAmiibosResult = filteredAmiibos(amiibosArray, query)

    expect(actualfilteredAmiibosResult).toEqual([]);
})