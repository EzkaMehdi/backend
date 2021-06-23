import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let history = useHistory()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            history.push("/admin")
        }
    }, [])

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8003/auth/login", { username, password })

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token)
                history.push("/admin")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6 mx-auto">
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <button type="submit" className="btn btn-primary mb-3" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
