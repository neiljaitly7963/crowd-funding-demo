import React from 'react';
import FakeContainer from '../components/FakeContainer/FakeContainer' 

const About = () => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <h1>About Page</h1>
            <FakeContainer />
        </div>
    )
}

export default About;