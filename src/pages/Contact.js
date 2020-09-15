import React from 'react';
import FakeContainer from '../components/FakeContainer/FakeContainer' 

const Contact = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <h1>Contact Page</h1>
            <FakeContainer />
        </div>
    )
}

export default Contact;