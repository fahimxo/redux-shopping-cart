import React from 'react';
import star from '../../../assets/icons/star.png'

const Star = ({rate}) => {

		let stars = [];
		for (let i = 1; i <= rate; i++) {
            stars.push((<img key={i} src={star} alt='star' width={22}/>));
        }
    return (
        <>
          {stars}  
        </>
    );
}

export default Star;
