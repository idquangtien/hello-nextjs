import React from 'react';

const Header = () => {
    return (
        <header className=''>
            <div className="container">
                <div className="d-flex align-items-center h-80px">
                    <div className="mr-auto">
                        <i className='material-icons-outlined'>menu</i>
                    </div>
                    <div className="tc">Logo</div>
                    <div className="ml-auto">
                        <i className='material-icons-outlined'>more_vert</i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;