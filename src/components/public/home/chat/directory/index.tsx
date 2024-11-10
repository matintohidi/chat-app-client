import React from 'react';
// components
import Header from './header';
import Members from './members';
import Files from './files';

const Directory : React.FC = () => {
    return (
        <section className="hidden lg:w-1/4 lg:flex lg:flex-col">
            <Header />

            <div className="overflow-auto">
                <Members />

                <Files />
            </div>
        </section>
    )
}

export default Directory;