import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../style/register.css';
import NavBar from '../components/navbar.jsx'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        leetcode: '',
        codeforces: '',
        codechef: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful registration
                console.log('User registered:', data);
            } else {
                // Handle registration error
                console.error('Error registering user:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <NavBar/>
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="LeetCode Username"
                            name="leetcode"
                            value={formData.leetcode}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Your Roll No"
                            name="rollNumber"
                            required
                            value={formData.rollNumber}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-id-card'></i>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Codeforces Username"
                            name="codeforces"
                            value={formData.codeforces}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email ID"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="CodeChef Username"
                            name="codechef"
                            value={formData.codechef}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Enter 8 digit password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Confirm password"
                            required
                        />
                        <i className='bx bxs-lock'></i>
                    </div>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
        </>
    );
};

export default Register;
