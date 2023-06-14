import React from 'react';
// components
import { Banner , Features , Statistics , Comment } from '../../components';

const Landing : React.FC = () => {
    return (
        <>
            <Banner />
            <Features />
            <Statistics />
            <Comment />
        </>
    )
}

export default Landing;