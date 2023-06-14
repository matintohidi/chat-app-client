import React from 'react';
// components
import { Banner , Features , Statistics , Comment , GrowCommunication } from '../../components';

const Landing : React.FC = () => {
    return (
        <>
            <Banner />
            <Features />
            <Statistics />
            <Comment />
            <GrowCommunication />
        </>
    )
}

export default Landing;