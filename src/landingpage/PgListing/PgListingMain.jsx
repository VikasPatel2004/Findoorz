import React from 'react';

const PgListingMain = ({ listing, currUser   }) => {
    // const isOwner = currUser   && currUser  ._id === listing.owner._id;

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     // Add your delete logic here, e.g., making an API call to delete the listing
    // };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-50 py-4 my-4">
            <div className="w-50 text-start mb-4"> 
                <h3>
                    This is <span className="text-warning">your</span> selected <span className="text-warning">Room</span>!!
                </h3>
            </div>
            <div className="card listing-card p-4 m-2 shadow" style={{ width: '50rem', borderRadius: '20px' }}>
                <img src='media/images/cartoon.jpg' className="card-img-top p-2" alt="listing_image" height="350rem" style={{ borderRadius: '20px' }} />
                
                <div className="card-body mt-3">
                    <h6 className="card-Address"><b>Address</b></h6>
                    <div className="address-box p-3 mb-3" style={{ border: '1px solid #ccc', borderRadius: '10px', backgroundColor: "#F5F1ED" }}>
                        C/253 Chhatra Chhaya Colony, Pithampur, Madhya Pradesh
                    </div>

                    <h6 className="card-Price"><b>Price</b></h6>
                    <div className="price-box p-3 mb-3" style={{ border: '1px solid #ccc', borderRadius: '10px', backgroundColor: "#F5F1ED" }}>
                        &#8377;2000/night
                    </div>

                    <h6 className="card-Location"><b>Location</b></h6>
                    <div className="location-box p-3 mb-3" style={{ border: '1px solid #ccc', borderRadius: '10px', backgroundColor: "#F5F1ED" }}>
                        Country: India<br />
                        City: Pithampur
                    </div>

                    <h6 className="card-Description"><b>Description</b></h6>
                    <div className="description-box p-3 mb-3" style={{ border: '1px solid #ccc', borderRadius: '10px', backgroundColor: "#F5F1ED" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus odit vitae illum aspernatur unde, placeat corrupti non nulla, deleniti eos ratione, molestias et consequuntur!
                    </div>
                   <div className="buttoncontaier d-flex justify-content-center pt-3">
                   <button type="button" className="btn btn-warning px-5 py-2 mx-5 my-2">submit</button> 
                   </div>

                    {/* {isOwner && ( */}
                    {/* <div className="showbtn">
                        <a href={`/listings/${listing._id}/edit`} className="btn btn-primary add-button">Edit</a>
                        <form method="POST" action={`/listings/${listing._id}?_method=DELETE`} style={{ display: 'inline' }} onSubmit={handleDelete}>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div> */}
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default PgListingMain;