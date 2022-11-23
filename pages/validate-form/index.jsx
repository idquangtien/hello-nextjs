import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import FormInput from '../../components/FormInput/FormInput'

const ValidateForm = () => {
    const [values, setValues] = useState({
        fullname: '',
        username: '',
        password: '',
        password2: '',
    });

    const onChange = (e) => {   
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        
        console.log(Object.fromEntries(data.entries()))
    }

    console.log(values);
    return (
        <div>
            <h1>Validate form</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="username"
                    label='username'
                    placeholder='username'
                    pattern={`[A-Za-z0-9]{3,16}$`}
                    message='Required'
                    required
                    value={values['username']}
                    onChange={onChange}
                />

                <FormInput
                    name="email"
                    label='email'
                    placeholder='email'
                    required={true}
                    value={values['email']}
                    onChange={onChange}
                />
                <FormInput
                    name="passsword"
                    label='passsword'
                    placeholder='passsword'
                    required
                    value={values['passsword']}
                    onChange={onChange}
                />
                <FormInput
                    name="passsword2"
                    label='confirm passsword'
                    placeholder='passsword2'
                    required
                    value={values['passsword2']}
                    onChange={onChange}
                />
                
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default ValidateForm
