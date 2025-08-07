// src/pages/Register.jsx
import React, { useState } from 'react';
import api from '../api';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/auth/register', formData);
            alert(res.data.message || 'Registration successful');
        } catch (err) {
            console.error(err.response?.data || err.message);
            alert('Registration failed');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

