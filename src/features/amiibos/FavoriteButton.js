import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../favorites/favoritesSlice'
import unfavoritestar from '../../resources/images/unfavorite-star.png'
import favoritestar from '../../resources/images/favorite-star.png'

export const FavoriteButton = ({ amiiboId }) => {
    const favoriteAmiibos = useSelector(state => state.favorites)
    const dispatch = useDispatch();

    console.log('hello there' , favoriteAmiibos)

    const isFavorite = favoriteAmiibos.includes(amiiboId);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(amiiboId));
        } else {
            dispatch(addFavorite(amiiboId));
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

