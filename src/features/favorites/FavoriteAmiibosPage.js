import React from 'react'
import './css_pages/FavoriteAmiibosPage.css'
import { useSelector } from 'react-redux'
import { AmiiboExcerpt } from '../amiibos/AmiibosList'

export const FavoriteAmiibosPage = () => {
    const favoriteAmiibos = useSelector(state => state.favorites)

    const renderedFavoriteAmiibos = favoriteAmiibos.map(favAmiibo => (
        <AmiiboExcerpt key={favAmiibo.id} amiibo={favAmiibo}/>
    ))
    
    return (
            <>
            <h1>Favorite Amiibos</h1>
            <section className='amiibo-tiles-container'>
                {renderedFavoriteAmiibos}
            </section>
        </>
    )
}
