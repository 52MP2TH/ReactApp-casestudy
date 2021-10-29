import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Loginpage({ usersList, history }) {

    const [showError, setShowError] = useState(false)
    function loginData(e) {
        e.preventDefault();
        const userEmail = e.target.elements.userEmail.value;
        const password = e.target.elements.password.value;
        const userData = usersList.filter(usersData => usersData.userEmail === userEmail && usersData.password === password)
        if (userData.length === 0) {
            setShowError(true)
        }
        else if (userData[0].userEmail && userData[0].password) {
            history.push('/Welcomepage/:' + userData[0].id);
        }
        else {
            setShowError(true)
        }
    }

    return (
        <div className="container h-100 login-body">
            <div className=" d-flex justify-content-center">
                {showError && <p className="errorText">Invalid userEmail or Password, Try again!</p>}
            </div>
            <div className="d-flex justify-content-center">
                <div className="user_card">
                    <div className="d-flex justify-content-center form_container">
                        <form onSubmit={loginData}>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" name="userEmail" className="form-control input_user" placeholder="username" required />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control input_pass" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="password" required />
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" name="button" className="btn login_btn">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to="/Registerpage" className="ml-2">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Loginpage