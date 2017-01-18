import React from 'react';
export default ({cityList = []}) => {
    return (
        <ul className='city-list'>
            {
                cityList.map((city,index) => {
                    if(city){
                        return <li className='left textCenter' key={index} data-name={city.name}>{city.name}</li>
                    }
                })
            }
        </ul>
    );
}