import React from 'react';

const SignUp = () => {
    return ( 
        <div className='auth-container'>
            <form>
                <h2>Register User</h2>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter Name' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter Password' />
                </div>
                <div className="form-control">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" id="password2" placeholder='Enter Confirm Password' />
                </div>
                <input type="submit" value="Sign Up" />
                <p>Already have an account? Goto Login </p>
            </form>
        </div> 
    );
};

export default SignUp;