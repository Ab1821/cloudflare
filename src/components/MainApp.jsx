import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import AddWatchnow from './AddWatchnow';
import WhatsNew from './WhatsNew';
import ExploreProducts from './ExploreProducts';
import AddNeedHelp from './AddNeedHelp';
import ProtectInfra from './ProtectInfra';
import WhyCloudflare from './WhyCloudflare';
import Companies from './Companies';
import Slider from './Slider';
import Footer from './Footer';


function MainApp(props) {
    return (
        <>

            <Navbar />
            <Header />
            <AddWatchnow />
            <WhatsNew />
            <ExploreProducts />
            <AddNeedHelp />
            <ProtectInfra />
            <WhyCloudflare />
            <Companies />
            <Slider />
            <Footer />


        </>
    );
}

export default MainApp;