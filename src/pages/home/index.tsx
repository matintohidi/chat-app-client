import React from 'react';
// components
import { Navbar , Contacts , Chat , Directory } from '../../components';

const Home : React.FC = () => {
    return (
        <section className="flex h-screen overflow-hidden">
            <Navbar />
            <Contacts />
            <Chat />
            <Directory />
        </section>
    )
}

export default Home;