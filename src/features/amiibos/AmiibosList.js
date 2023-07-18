import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { FavoriteButton } from './FavoriteButton'
import { fetchAmiibos, selectAllAmiibos } from './amiibosSlice'


export const AmiiboExcerpt = ({ amiibo }) => {
    return (
        <article className="amiibo-tile">
            <h3>{amiibo.name}</h3>
            <div className='star-icon-amiibo-tile'>
                <FavoriteButton amiibo={amiibo}/>
            </div>
            <img src={amiibo.image} alt={`${amiibo.name} Amiibo`} className='amiibo-tile-img'/>
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
    const dispatch = useDispatch()
    const amiibos = useSelector(selectAllAmiibos)

    const amiibosStatus = useSelector(state => state.amiibos.status)
    const error = useSelector(state => state.amiibos.error)
   
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (amiibosStatus === 'idle') {
            dispatch(fetchAmiibos())
        }
    }, [amiibosStatus, dispatch])

    const filteredAmiibos = amiibos.filter(amiibo => 
         amiibo.name.toLowerCase().includes(query.toLowerCase()) 
        // || amiibo.gameSeries.toLowerCase().includes(query.toLowerCase()) ||
        // amiibo.amiiboSeries.toLowerCase().includes(query.toLowerCase())
    )

    let content

    if (amiibosStatus === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (amiibosStatus === 'succeeded') {
        content = filteredAmiibos.map(amiibo => (
            <AmiiboExcerpt key={amiibo.id} amiibo={amiibo}/>
        ))
    } else if (amiibosStatus === 'failed') {
        content = <div>{error}</div>
    }


    // const renderedAmiibos = filteredAmiibos.map(amiibo => (
    //     <AmiiboExcerpt key={amiibo.id} amiibo={amiibo} />
    // ))

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
                {content}
            </section> 
        </>  
    )
}
