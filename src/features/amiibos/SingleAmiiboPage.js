import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export const SingleAmiiboPage = () => {
    const { id } = useParams();
    const amiibo = useSelector(state => state.amiibos).find(amiibo => amiibo.id === id)
   
    return (
        <article className='single-amiibo-container'>
            <img src={amiibo.image} alt='amiibo image'/>
            <section>
                <h2>{amiibo.name}</h2>  
                <h3>{amiibo.gameSeries}</h3>
                <h3>{amiibo.amiiboSeries}</h3>
                <ul>
                    <li>{amiibo.release.au}</li>
                    <li>{amiibo.release.eu}</li>
                    <li>{amiibo.release.jp}</li>
                    <li>{amiibo.release.na}</li>
                </ul>
            </section>
        </article>
    )
}

