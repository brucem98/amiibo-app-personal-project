import React from 'react'
import './css_pages/FavoriteButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../favorites/favoritesSlice'
import unfavoritestar from '../../resources/images/unfavorite-star.png'
import favoritestar from '../../resources/images/favorite-star.png'

export const FavoriteButton = ({ amiibo }) => {
    const favoriteAmiibos = useSelector(state => state.favorites)
    const dispatch = useDispatch();

    const isFavorite = favoriteAmiibos.includes(amiibo);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(amiibo));
        } else {
            dispatch(addFavorite(amiibo));
        }
    };

    return (
    <>
        {
            isFavorite ? 
            <img 
                src={favoritestar} 
                alt='Gold Star' 
                className='star-icon'
                onClick={handleToggleFavorite}
            /> : 
            <img 
                src={unfavoritestar} 
                alt='Empty Star' 
                className='star-icon'
                onClick={handleToggleFavorite}
            />
        } 
    </>
    )
}

