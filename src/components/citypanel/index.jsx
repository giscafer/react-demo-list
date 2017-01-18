import React from 'react';
import LetterFilter from './letterFilter';
import CityList from './cityList';
import '../../styles/citypanel/index.less';

export default ({cityList = [], setVisibilityFilter}) => {
    return (
        <div className='city-panel'>
            <CityList cityList={cityList} />
            <LetterFilter onFilterChange={setVisibilityFilter} />
        </div>
    )
}