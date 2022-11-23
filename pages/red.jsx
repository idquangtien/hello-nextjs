import React from 'react';
import {useSelector} from 'react-redux';


const Red = () => {
    
    const todo = useSelector(state => {
        return state.todo;
    });

    return (
        <div>
            <h1>red</h1>
            <input type="text" onKeyDown={() => alert(1)} />
        </div>
    );
}
export default Red;
