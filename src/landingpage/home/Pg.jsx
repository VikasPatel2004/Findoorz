import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pg() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/PgHome'); // Navigate to the PgHome route
    };
    const handleVideoClick = () => {
        navigate('/PgHome'); // Navigate to the PgHome route when the video is clicked
    };

    return ( 
        <div 
            className="card text-center" 
            style={{ 
                width: "80vw",
                height: "80vh",
                backgroundImage: `url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Background image
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent repeating
                borderRadius: '15px', // Optional: add some border radius to the card
                overflow: 'hidden', // Ensure content doesn't overflow
                color: 'white', // Set text color to white for better contrast
                margin: "8rem"
            }} 
        > 
            <div className="row text-center py-5" style={{ 
                height: '100%', // Make the row take the full height of the card
                padding: '20px', 
                backgroundColor: "rgba(0, 0, 0, 0.76)", // Adjusted opacity
                display: 'flex', // Use flexbox
                alignItems: 'center', // Center items vertically
                justifyContent: 'center' // Center items horizontally
            }}> 
                <div className="col-6 mt-5">
                    <video onClick={handleVideoClick}
                        width="400" 
                        height="400" 
                        autoPlay 
                        loop 
                        muted 
                        style={{ borderRadius: "50%", overflow: "hidden" }} 
                    >
                        <source src="media/images/PG.mp4" type="video/mp4"/>
                    </video>       
                </div>
                <div className="col-6 d-flex align-items-center">
                    <div className='Pgcomp' style={{ fontSize: '2.5rem', listStyle: "none" }}>
                        <h1 className='' style={{ fontSize: '2.5rem' }}>
                            "Find your<span className='text-warning' style={{ fontSize: '2.5rem' }}> PG</span>, fast and <br/> <span className='text-warning' style={{ fontSize: '2.5rem' }}>fuss</span> -free!"
                        </h1>
                        <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleButtonClick}>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pg;