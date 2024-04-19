import React from 'react';
// components
import { Banner , Features , Statistics , Comment , GrowCommunication } from '../../components';

const Landing : React.FC = () => {
    return (
        <section>
            <Banner />
            <Features />
            <Statistics />
            <Comment />
            <GrowCommunication />
        </section>
    )
}

export default Landing;