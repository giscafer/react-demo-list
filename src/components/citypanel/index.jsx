import React from 'react';
import LetterFilter from './letterFilter';
import CityList from './cityList';
import '../../styles/citypanel/index.less';
import Nav from '../nav/Nav';

export default ({cityList = [], setVisibilityFilter}) => {
    return (
        <div className='city-panel'>
             <Nav />
            <CityList cityList={cityList} />
            <LetterFilter onFilterChange={setVisibilityFilter} />
        </div>
    )
}