import React from 'react';
import { useNavigate } from 'react-router-dom';

function FlatRenterMain() {
    const navigate = useNavigate();

    // Navigate to the Renter home route
    const handleButtonClick = () => {
        navigate('/FlatListingHome'); // Navigate to the Renter home route
    };

    return (
        <div className="container text-center pt-5">
            <h1 className='text-left py-2' style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                "Flat walls may be  <span className='text-warning' style={{ fontSize: '1.5rem' }}>plain </span>, but they're <span className='text-warning' style={{ fontSize: '1.5rem' }}>painted</span> with <span className='text-warning' style={{ fontSize: '1.5rem' }}>memories </span>of friends!"
            </h1>
            <div className="row py-4">
                {Array(6).fill().map((_, index) => ( // Example to create multiple cards
                    <div className="col-4 py-4" key={index}>
                        <div className="card listing-card">
                            <img src='media/images/cartoon.jpg' className="card-img-top" alt="listing" style={{ height: '15rem' }} />
                            <div className="card-body text-center" style={{ backgroundColor: "#F5F1ED" }}>
                                <p className="card-text text-center">
                                    <div><b>my address</b></div>
                                    <div>
                                        &#8377;2000/night 
                                        <i className="Tax-info"> &nbsp; &nbsp; +18% GST</i>
                                    </div>
                                </p>
                                <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2" onClick={handleButtonClick}>
                                    Explore
                                </button> 
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlatRenterMain;