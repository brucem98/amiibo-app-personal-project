import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import au from '../../resources/images/au-flag-icon.png';
import eu from '../../resources/images/eu-flag-icon.png';
import jp from '../../resources/images/jp-flag-icon.png';
import na from '../../resources/images/na-flag-icon.png';
import { FavoriteButton } from './FavoriteButton';

export const SingleAmiiboPage = () => {
    const { id } = useParams();
    const amiibo = useSelector(state => state.amiibos.amiibos).find(amiibo => amiibo.id === id)
   
    return (
        <article className='single-amiibo-container'>
            <img src={amiibo.image} alt='amiibo' className='single-amiibo-image'/>
            <section className='single-amiibo-info'>
                <div className='single-info-1'>
                    <h2>{amiibo.name}</h2>  
                    <h3>Game Series: <span className='info-style'>{amiibo.gameSeries}</span> </h3>
                    <h3>Amiibo Series: <span className='info-style'>{amiibo.amiiboSeries}</span> </h3>
                </div>
                <h3 className='releases-title'>Release Date By Region:</h3>
                <ul className='single-info-2 info-style'>
                    <li><img src={au} alt='Australia Icon'/>{amiibo.release.au}</li>
                    <li><img src={eu} alt='EU Icon'/>{amiibo.release.eu}</li>
                    <li><img src={jp} alt='Japan Icon'/>{amiibo.release.jp}</li>
                    <li><img src={na} alt='NA Icon'/>{amiibo.release.na}</li>
                </ul>  
            </section>
            <div className='star-icon-single-amiibo-page'>
                        <FavoriteButton amiibo={amiibo}/>
            </div>
        </article>
    )
}

