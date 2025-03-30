import React from 'react';
import { useNavigate } from 'react-router-dom';

function PgMain() {
    const navigate = useNavigate();
    
    // Navigate to the Landlord route
    const handleLandlordClick = () => {
        navigate('/LandLordHome'); // Navigate to the Landlord route
    };

    // Navigate to the Renter route
    const handleRenterClick = () => {
        navigate('/PgRenterHome'); // Navigate to the Renter route
    };

    return (  
        <>
            <div className="container m-5 p-5 text-center">
                <div className="row" style={{ backgroundColor: "#EBEBEB", height: "75vh", alignItems: "center", borderRadius: "20px" }}>
                    <div className="col-6">
                        <video 
                            onClick={handleLandlordClick} // Handle click for Landlord video
                            width="400" 
                            height="400" 
                            autoPlay 
                            loop 
                            muted 
                            style={{ borderRadius: "50%", overflow: "hidden", cursor: 'pointer' }} // Add cursor style for better UX
                        >
                            <source src="media/images/LandLord.mp4" type="video/mp4"/>
                        </video>     
                        <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleLandlordClick}>Explore</button>
                    </div>
                    
                    <div className="col-6">
                        <video 
                            onClick={handleRenterClick} // Handle click for Renter video
                            width="400" 
                            height="400" 
                            autoPlay 
                            loop 
                            muted 
                            style={{ borderRadius: "50%", overflow: "hidden", cursor: 'pointer' }} // Add cursor style for better UX
                        >
                            <source src="media/images/RenterPG.mp4" type="video/mp4"/>
                        </video>     
                        <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleRenterClick}>Explore</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PgMain;