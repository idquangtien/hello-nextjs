import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { PrimaryLayout } from '../../core/Layout/PrimaryLayout';

const CardPage = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(p => p + 1);
        console.log('set 1', count);


        setCount(p => p + 1);
        console.log('set 3', count);
        setCount(p => p + 1);
        console.log('set 3', count);
    }, [])
    console.log(count);
    return (
        <PrimaryLayout>
            <div className="container">
                <div className='row gap-8px'>
                    {Array(3).fill(0).map((item, index) => <div className='col-4'><Card /></div>)}
                </div>

            </div>
        </PrimaryLayout>

    );
};

export default CardPage;