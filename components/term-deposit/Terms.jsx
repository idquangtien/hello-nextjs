import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import slicer from '../../redux/slicer/termDepositSlicer';

const Terms = () => {
    const dispatch = useDispatch();
    const term = useSelector(state => state.termDeposit.data.savingInfo.term);
    const handleCheck = (value) => {
        dispatch(slicer.actions.updateTerm(value))
    }
    return (
        <div>
            <div className='row gap-4px'>
                {
                    ["1M", "3M", "6M", "12M", "13M"].map((item, index) => {
                        return (
                            <div className="col flex-1" key={index}>
                                <label className='check-btn' >
                                    <input
                                        type='radio'
                                        name='term'
                                        value={item}
                                        checked={term === item}
                                        onChange={(e) => handleCheck(e.target.value)}
                                    />
                                    <div className='centered h-40px border'>{item}</div>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mt-8px'>
                
            </div>
        </div>
    );
};

export default Terms;