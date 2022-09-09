import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://mern-login-register-profile.herokuapp.com/register", {
                userName,
                email,
                password,
                confirmPassword
            });
            toast.success(response.data);
            response.data && navigate("/login");
        } catch (err) {
            toast.error(err.response.data);
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <div className="container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your full name"
                        value={userName}
                        required
                        onChange={e=> setUsername(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="example@example.com"
                        required
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="********"
                        required 
                        minLength="8"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        />
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="********"
                        minLength="8"
                        required
                        value={confirmPassword}
                        onChange={e=> setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-success">Register</button>
                <p>Already Registered Click here to <Link to="/login">Login</Link></p>
            </form>
            </div>
        </div>
    )
}

export default Register