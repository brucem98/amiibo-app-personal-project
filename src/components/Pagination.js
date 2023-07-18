import React from 'react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={number === currentPage ? 'active-page' : 'inactive-page'}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </li>
            ))}
        </ul>
    )
}

