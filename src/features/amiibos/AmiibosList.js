import React from 'react'
import { useSelector } from 'react-redux'

export const AmiibosList = () => {
    const amiibos = useSelector(state => state.amiibos)

    const renderedAmiibos = amiibos.map(amiibo => (
        <article key={amiibo.id} className='amiibo-tile'>
            <h3>{amiibo.name}</h3>
            <img src={amiibo.image} alt={`${amiibo.name} Amiibo`}/>
            <div>
                <p>Game Series: {amiibo.gameSeries}</p>
                <p>Amiibo Series: {amiibo.gameSeries}</p>
            </div>
        </article>
    ))
    console.log(amiibos)

    return (
        <>
            <h2>Amiibos</h2>
            <section className='amiibo-tile-container'>
                {renderedAmiibos}
            </section>
        </>
    )
}
