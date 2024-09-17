"use client"
import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        fullname: '',
        timezone: '',
        referal_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            token: "f8891711f0f0fb627536434694c6eaabed3424a5a4a3148225c89db59ee587ad",
            username: formData.username,
            password: formData.password,
            email: formData.email,
            phone: formData.phone,
            fullname: formData.fullname,
            timezone: formData.timezone,
            referal_id: formData.referal_id
        };

        try {
            const response = await fetch('https://sellvia.business/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            const result = await response.json();
            console.log(result);
            alert('Signup successful!');
        } catch (error) {
            console.error('Error:', error);
            alert('Signup failed.');
        }
    };

    // Simple SHA256 hash function using Web Crypto API
    const sha256 = async (message) => {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Signup Form</h2>
            <input type="hidden" name="hit" value="1" />
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Phone:</label>
                <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Full Name:</label>
                <input 
                    type="text" 
                    name="fullname" 
                    value={formData.fullname} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Timezone:</label>
                <input 
                    type="text" 
                    name="timezone" 
                    value={formData.timezone} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Referral ID:</label>
                <input 
                    type="text" 
                    name="referal_id" 
                    value={formData.referal_id} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
                Send
            </button>
        </form>
    );
};

export default SignupForm;
