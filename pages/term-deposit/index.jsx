import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Suggestion from '../../components/term-deposit/Suggestion';
import Terms from '../../components/term-deposit/Terms';
import { PrimaryLayout } from '../../core/Layout/PrimaryLayout';
import { getInitSaving } from '../../redux/slicer/termDepositSlicer';

function TermDeposit(props) {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.termDeposit.loading);
    const savingInfo = useSelector(state => state.termDeposit.data.savingInfo)
    console.log('savingInfo', savingInfo)

    useEffect(() => {
        dispatch(getInitSaving())
    },[])
    return (
        <PrimaryLayout>
            {loading && <h1>loading....</h1>}
            <div className='container'>
                <div className="row gap-32px">
                    <div className="col-6">
                        <h5 className='mb-8px fs-16px'>Amount</h5>
                        <Suggestion />
                    </div>
                    <div className="col-6">
                        <h5 className='mb-8px fs-16px'>Terms</h5>
                        <Terms />
                    </div>
                </div>

            </div>
        </PrimaryLayout>

    );
}

export default TermDeposit;