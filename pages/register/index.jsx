import React from 'react'
import { useForm } from '../../core/hooks/useForm';
import FormInput from '../../components/FormInput/FormInput'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const initData = {  email: "", password: '', password2: '' }

const RegisterForm = () => {
    const [formData, setFormData] = useState(initData);
    const [errorMessage, setErrorMessage] = useState();
    const [dirty, setDirty] = useState(false);
    

    useEffect(() => {
        // if (Object.keys(errorMessage).length === 0) {
        // }
        dirty && onValidate();

    }, [formData])


    const onChange = (e) => {
        setDirty(true);
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onValidate = () => {
        console.log('formData', formData);
        const { valid, error } = Validator(formData)
        setErrorMessage(error);
        return valid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const valid = onValidate();
        if(valid) {
            
            axios.post("http://localhost:8080/", formData);

        } else {
            alert('Error, Please check again')
        }
    }

    console.log('errorMessage', errorMessage);
    


    return (
        <div className="container">
            <form onSubmit={onSubmit} autoComplete="off">
                <h1>RegisterForm</h1>
                <hr className='hr my-16px'/>
                <FormInput
                    name="email"
                    label="Email"
                    autoComplete="off"
                    // required
                    value={formData.email}
                    onChange={onChange}
                    error={errorMessage && errorMessage.email ? true : false}
                    message={errorMessage?.email}
                />
                <br />
                
                <br />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    // required
                    value={formData.password}
                    onChange={onChange}
                    error={errorMessage && errorMessage.password ? true : false}
                    message={errorMessage?.password}
                />
                <br />
                <FormInput
                    type="password"
                    name="password2"
                    label="Confirm password"
                    // required
                    value={formData.password2}
                    onChange={onChange}
                    error={errorMessage && errorMessage.password2 ? true : false}
                    message={errorMessage?.password2}
                />
                <br />
                <button type='submit' className='btn btn-default btn-border-gradient-pill'>submit</button>
            </form>
        </div>
    )
}

export default RegisterForm;

const Validator = (data) => {
    let err = {};
    let valid = true;
    const { email, password, password2 } = data;

    if (!email || email.trim() === "") {
        valid = false;
        err.email = 'Email is required';
    } else if (email.length < 3 || email.length > 16) {
        err.email = 'Email has length between 3 and 6'
    } else if (!validateEmail(email)) {
        err.email = `Don't format email`
    } else {
        valid = true;
        err.email = null;
    }

    if (!password || password.trim() === "") {
        valid = false;
        err.password = 'Password is required';
    } else if (password.length < 3) {
        valid = false;
        err.password = 'Password >= 3';
    } else {
        valid = true;
        err.password = null;
    }

    if (!password2 || password2.trim() === "") {
        valid = false;
        err.password2 = 'Confirm password is required';
    } else if (password2 !== password) {
        valid = false;
        err.password2 = 'Confirm password is not map';
    } else {
        valid = true;
        err.password2 = null;
    }


    return {
        valid: valid,
        error: err,
    };
}

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
