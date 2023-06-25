import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export const SingleAmiiboPage = () => {
    const { id } = useParams();
    const amiibo = useSelector(state => state.amiibos).find(amiibo => amiibo.id === id)
   
    return (
        <article>
            <h1>{amiibo.name}</h1>
        </article>
    )
}

