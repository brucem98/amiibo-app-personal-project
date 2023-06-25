import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export const AmiibosList = () => {
    const amiibos = useSelector(state => state.amiibos)

    const renderedAmiibos = amiibos.map(amiibo => (
        <article key={amiibo.id} className="amiibo-tile">
            <Link to= 
                // {`/amiibos/${amiibo.name.concat(' amiibo ', amiibo.gameSeries).replaceAll(' ', '-').toLowerCase()}`}
                {`/amiibos/${amiibo.name.replaceAll(' ', '')}/${amiibo.id}`}
                className='single-amiibo-link'
            >
            <h3>{amiibo.name}</h3>
            <img src={amiibo.image} alt={`${amiibo.name} Amiibo`}/>
            <div>
                <p>Game Series: {amiibo.gameSeries}</p>
                <p>Amiibo Series: {amiibo.amiiboSeries}</p>
            </div>
            </Link>
        </article>
        
    ))
    console.log(amiibos)

    return (
        <>
            <section className="amiibo-tiles-container">
                {renderedAmiibos}
            </section>
        </>
    )
}
