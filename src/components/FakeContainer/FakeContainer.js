import React from 'react';
import './FakeContainer.css';

const FakeContainer = () => {
    const array = [1,2,3,4,5,6];
    return(
        <div className='app'> 
            {
                array.map(arr => <div className='container' key={arr}></div>)
            }
        </div>
    )
}

export default FakeContainer;