import React from 'react';
import FakeContainer from '../components/FakeContainer/FakeContainer' 

const Info = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <h1>Info Page</h1>
            <FakeContainer />
        </div>
    )
}

export default Info;