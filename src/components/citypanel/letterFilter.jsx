import React from 'react';

export default ({onFilterChange}) => {
    // let letterArr = new Array(26);
    // for (var i = 0; i < 26; i++) {
    //     letterArr[i]=String.fromCharCode((65 + i));
    // }
    // console.log(letterArr)
    let letterArr=['特大','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (
        <ul className='city-index'>
            {
                letterArr.map((letter,i) => {
                    return <li className='left textCenter on_mouseover' key={i} onClick={()=>{ onFilterChange(letter) }}>{letter}</li>
                })
            }
        </ul>
    );
}