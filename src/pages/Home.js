import React from 'react';
import FakeContainer from '../components/FakeContainer/FakeContainer' 

const Home = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <h1>Home Page</h1>
            <FakeContainer />
        </div>
    )
}

export default Home;