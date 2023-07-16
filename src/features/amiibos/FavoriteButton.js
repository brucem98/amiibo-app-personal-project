import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../favorites/favoritesSlice'
import unfavoritestar from '../../resources/images/unfavorite-star.png'
import favoritestar from '../../resources/images/favorite-star.png'

export const FavoriteButton = ({ amiibo }) => {
    const favoriteAmiibos = useSelector(state => state.favorites)
    const dispatch = useDispatch();

    console.log('hello there' , favoriteAmiibos)

    const isFavorite = favoriteAmiibos.includes(amiibo);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(amiibo));
        } else {
            dispatch(addFavorite(amiibo));
        }
    };

    return (
    <button
        type='button'
        className='favorite-button'
        onClick={handleToggleFavorite}
    >
        {isFavorite ? <img src={favoritestar} alt='Gold Star'/> : <img src={unfavoritestar} alt='Empty Star'/>}
    </button>
  )
}

