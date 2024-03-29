'use client'

import React, { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className='signUpBox'>
            <form className='signUpForm' onSubmit={handleSubmit}>
                <div className='formItem textInput'>
                    <label>First Name:</label>
                    <input className='formValue'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formItem textInput'>
                    <label>Last Name:</label>
                    <input className='formValue'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formItem radioInput'>
                    <div className='maleRadioBtn'>
                        <label>Male </label>
                        <input
                            type="radio"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='femaleRadioBtn'>
                        <label>Female </label>
                        <input
                            type="radio"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='formItem textInput'>
                    <label>Email ID:</label>
                    <input className='formValue'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formItem textInput'>
                    <label>Phone Number:</label>
                    <input className='formValue'
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formItem textInput'>
                    <label>Password:</label>
                    <input className='formValue'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
            <div className='btnDiv'><button className='submitButton' type="submit">Create account</button></div>
        </div>
    );
}