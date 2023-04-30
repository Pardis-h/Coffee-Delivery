import React from 'react';
import Header from './Header';
import Footer from './Footer';

function index({children}) {
    return (
        <div className='px-10 py-6'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default index;