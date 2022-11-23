import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import slicer from '../../redux/slicer/termDepositSlicer';

function Suggestion() {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.termDeposit.data.savingInfo.amount);

    const handleChange = (value) => {
        dispatch(slicer.actions.updateAmount(value))
    }
    return (
        <div>
            <div className='row gap-4px'>
                {
                    [100, 300, 500].map(item => {
                        return (
                            <div className="col-4" key={item}>
                                <label className='check-btn grow-1' >
                                    <input
                                        type='radio'
                                        name='amount'
                                        value={item}
                                        checked={+amount === +item}
                                        onChange={(e) => handleChange(e.target.value)}
                                    />
                                    <div className='centered h-40px border'>{item}</div>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mt-8px'>
                <input
                    type='number'
                    placeholder='nhập số tiền'
                    className='form-control'
                    value={amount}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Suggestion;