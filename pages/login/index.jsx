import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <form>
                <h1 className='fs-24px fw-bold'>Login</h1>
                <div className="form-group">
                    <div className="input-icon">
                        <input type="text" placeholder='Username' />
                        <i className='material-icons-outlined'>person</i>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <input type="password" placeholder='Password' />
                        <i className='material-icons-outlined'>key</i>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;