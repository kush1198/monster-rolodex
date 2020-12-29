import './search-box.styles.css';
import React from 'react';

export const SearchBox = ({placeholder, handleChanges}) => {
    return <input className='search' type='search' placeholder={placeholder} onChange={handleChanges}/>}