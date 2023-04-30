import React from 'react';

function NotFound(props) {
    return (
        <section className='text-gray-600 body-font'>
            <div className="container my-48 px-5 mx-auto flex flex-col gap-4 items-center justify-center">
                    <h1 className='font-bold text-8xl'>404</h1>
                    <p className='font-semibold text-4xl'>Page Not Found</p>
            </div>
        </section>
    );
}

export default NotFound;