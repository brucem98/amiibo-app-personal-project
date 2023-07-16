import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FavoriteButton } from './FavoriteButton'

export const AmiibosList = () => {
    const amiibos = useSelector(state => state.amiibos)

    const renderedAmiibos = amiibos.map(amiibo => (
        <article key={amiibo.id} className="amiibo-tile">
            <h3>{amiibo.name}</h3>
            <FavoriteButton amiibo={amiibo}/>
            <img src={amiibo.image} alt={`${amiibo.name} Amiibo`}/>
            <div>
                <p>Game Series: <span className='info-style'>{amiibo.gameSeries}</span></p>
                <p>Amiibo Series: <span className='info-style'>{amiibo.amiiboSeries}</span></p>
            </div>
            <Link to= 
                {`/amiibos/${amiibo.name.replaceAll(' ', '')}/${amiibo.id}`}
                className='single-amiibo-link'
            >
                <button>View Amiibo</button>
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
