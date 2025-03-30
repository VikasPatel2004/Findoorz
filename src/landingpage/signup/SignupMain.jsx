import React from 'react';

function SignupMain() {
    return ( 
        <>
         <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '30rem', border: '2px solid black', borderRadius: '10px' }}>
                <h2 className="text-center text-warning mb-4">Signup</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" required />
                    </div>
                    <button type="submit" className="btn btn-warning w-100">Sign Up</button>
                </form>
                <p className="text-center mt-3">Already have an account? <a href="#" className="text-warning">Login</a></p>
            </div>
        </div>
        </>
     );
}

export default SignupMain;