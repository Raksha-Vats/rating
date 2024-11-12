import React  from 'react';

import 'boxicons/css/boxicons.min.css';
import '../style/login.css';
import NavBar from '../components/navbar.jsx'


const Login =() =>
    {
return(
 <>
    <NavBar/>
      <div className="wrapper">
        <form action="">
            <h1>
                Login
            </h1>
            <div className="input-box">
                <div className="input-field">
                    <input type="email" placeholder="email" required />
                    <i class='bx bxs-envelope' ></i>
                </div>
                <div className="input-field">
                    <input type="password" placeholder="enter your password" />
                    <i class='bx bxs-lock'></i>
                </div>
            </div>

            

            <button type ="submit" class="btn">Sign In</button> 
            
        </form>
    </div>
 </>
);
};

export default Login;