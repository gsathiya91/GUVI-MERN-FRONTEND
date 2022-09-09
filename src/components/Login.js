import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import LoginIcon from '@mui/icons-material/Login';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://mern-login-register-profile.herokuapp.com/login", {
                email: email,
                password: password
            })
            if (response.data) {
                await localStorage.setItem('token', response.data);
                navigate("/profile");
            }

        } catch (err) {
            toast.error(err.response.data);

        }
    }
    return (
        <div className="loginform">
            <h2>Login</h2>
            <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="example@example.com"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="********"
                        minLength="8"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-success"><LoginIcon /> Login</button><br />

                <p className="btnspan">
                    Don't have an account click here to <Link to="/">Register</Link>
                </p>
            </form>
        </div>
        </div >
    )
}

export default Login;