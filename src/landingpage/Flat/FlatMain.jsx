import React from 'react';
import { useNavigate } from 'react-router-dom';

function FlatMain() {
    const navigate = useNavigate();
       
       // Navigate to the Landlord route
       const handleLenderClick = () => {
           navigate('/FlatLenderHome'); // Navigate to the Landlord route
       };
   
       // Navigate to the Renter route
       const handleRenterClick = () => {
           navigate('/FlatRenterHome'); // Navigate to the Renter route
       };
        
       const handleBrokerClick = () => {
           navigate('/FlatBrokerHome'); // Navigate to the Renter route
       };
        
    return ( 
        <>
         <div class="container m-5 p-5 text-center" >
        <div class="row "style={{backgroundColor: "#EBEBEB" ,height:"75vh",alignItems:"center",borderRadius:"20px"}}>
            <div class="col-4 ">
            <video onClick={handleLenderClick}
                        width="350" 
                        height="350" 
                        autoPlay 
                        loop 
                        muted 
                        style={{ borderRadius: "50%", overflow: "hidden" }} 
                    >
                        <source src="media/images/Lender.mp4" type="video/mp4"/>
                    </video>     
                    <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleLenderClick}>Explore</button>
            </div>
            
            <div class="col-4">
            <video onClick={handleRenterClick}
                        width="350" 
                        height="350" 
                        autoPlay 
                        loop 
                        muted 
                        style={{ borderRadius: "50%", overflow: "hidden" }} 
                    >
                        <source src="media/images/RenterFlat.mp4" type="video/mp4"/>
                    </video>     
                    <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleRenterClick}>Explore</button>
            </div>
            <div class="col-4">
            <video onClick={handleBrokerClick}
                        width="350" 
                        height="350" 
                        autoPlay 
                        loop 
                        muted 
                        style={{ borderRadius: "50%", overflow: "hidden" }} 
                    >
                        <source src="media/images/Broker.mp4" type="video/mp4"/>
                    </video>     
                    <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleBrokerClick}>Explore</button>
            </div>
        </div>
    </div>
        </>
     );
}

export default FlatMain;