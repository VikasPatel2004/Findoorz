import React, { useState } from 'react';

function FlatLenderFormMain() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        price: '',
        country: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value // Handle file input separately
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 mt-5" style={{ backgroundColor: "#F5F1ED" }}>
            <div className="col-md-8 col-lg-6">
                <div className="card p-5 shadow-sm">
                    <div className="card-body">
                        <h3 className="text-center mb-5">Tell <span className="text-center text-warning mb-5">Us About</span> Your Flat !!</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Address</label>
                                <input
                                    name="title"
                                    placeholder="ENTER YOUR ADDRESS HERE!!"
                                    type="text"
                                    className="form-control"
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    placeholder="GIVE DESCRIPTION ABOUT YOUR ROOM!!"
                                    className="form-control"
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                                <div className="invalid-feedback">Please choose a Description</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Your Room Images</label>
                                <input
                                    name="image"
                                    type="file"
                                    className="form-control"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        name="price"
                                        placeholder="1200"
                                        type="text"
                                        className="form-control"
                                        required
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">Please Enter A Valid Price.</div>
                                </div>
                                <div className="mb-3 col-md-8">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input
                                        name="location"
                                        placeholder="Gwalior"
                                        type="text"
                                        className="form-control"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                           <div className="d-flex justify-content-center pt-2">
                           <button className="btn btn-warning mt-4 text-center w-50" type="submit">Submit</button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlatLenderFormMain;