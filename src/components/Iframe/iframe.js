import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe title="1" width="1000"  scrolling="auto" src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;