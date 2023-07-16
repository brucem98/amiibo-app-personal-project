import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FavoriteButton } from './FavoriteButton'

export const AmiiboExcerpt = ({ amiibo }) => {
    return (
        <article className="amiibo-tile">
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
    )
}

export const AmiibosList = () => {
    const [query, setQuery] = useState('');

    const amiibos = useSelector(state => state.amiibos)

    const filteredAmiibos = amiibos.filter(amiibo => 
        amiibo.name.toLowerCase().includes(query.toLowerCase()) ||
        amiibo.gameSeries.toLowerCase().includes(query.toLowerCase()) ||
        amiibo.amiiboSeries.toLowerCase().includes(query.toLowerCase())
    )

    const renderedAmiibos = filteredAmiibos.map(amiibo => (
        <AmiiboExcerpt key={amiibo.id} amiibo={amiibo} />
    ))

    return (
        <>
            <input
                type='text'
                placeholder='Search for Amiibos, Amiibo Series, or Game Series!'
                className='search-bar'
                value = {query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <section className="amiibo-tiles-container">
                {renderedAmiibos}
            </section> 
        </>  
    )
}
