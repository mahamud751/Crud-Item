import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';

import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';

const Home = () => {
    return (

        <>
            <Navigation></Navigation>
            <div className="has-background-light">
                <div>
                    <div className="section">
                        <div className="columns">
                            <div className="column is-4 mt-5">
                                <div className="box">
                                    <Sidebar />
                                </div>
                            </div>
                            <div className="column is-8">
                                <Products />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Sidebar></Sidebar> */}
            <h1>This is home page</h1>

        </>
    );
};

export default Home;