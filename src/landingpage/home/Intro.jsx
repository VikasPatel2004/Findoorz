import React from 'react';
import "./Intro.css";

function Intro() {
    return ( 
        <div className="main-content">
            <div className='row' >
                <div className='col-6' style={{width:"60%"}}>
                    <h1 className='' style={{ fontSize: '4.5rem' }}>Discover a <span className='text-warning' style={{ fontSize: '4.5rem' }} >Place</span> You'll <span className='text-warning' style={{ fontSize: '4.5rem' }} >Love</span>  to Call Home</h1>
                    <h4 className='fw-light' style={{ fontSize: '1.4rem' }}>Opening doors to new opportunities and safe space.</h4>
                </div>
                <div className='col-6'></div>
            </div>
        </div>
    );
}

export default Intro;