import React from 'react'
import { useSelector } from 'react-redux'

export const AmiibosList = () => {
    const amiibos = useSelector(state => state.amiibos)

    const renderedAmiibos = amiibos.map(amiibo => (
        <article key={amiibo.id}>
            <h3>{amiibo.name}</h3>
            <img src={amiibo.image} alt={`${amiibo.name} Amiibo`}/>
            <p>Game Series: {amiibo.gameSeries}</p>
            <p>Amiibo Series: {amiibo.gameSeries}</p>
        </article>
    ))
    console.log(amiibos)

    return (
        <section>
            <h2>Amiibos</h2>
            {renderedAmiibos}
        </section>
    )
}
