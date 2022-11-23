import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../redux/slicer/todoSlicer';
import { v4 as uuidv4 } from 'uuid';

function Todo(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todo.data);
    const loading = useSelector(state => state.todo.loading);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);
    const handleAddTodo = () => {
        dispatch(addTodo({ id: uuidv4(), name: 'learn nextjs', completed: false, priority: 'medium' }))
    }
    const handleUpdateTodo = (id) => {
        dispatch(updateTodo({ id: id, name: `------> update name ${uuidv4()}`, completed: true, priority: 'medium' }))
    }
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }))
    }

    console.log('data', data)
    return (
        <div>
            <div className='loading' style={{backgroundColor: 'yellow'}}>{loading && 'loading..'}</div>
            {data && data.length > 0 && data.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => handleUpdateTodo(item.id)}>update</button>
                        <button onClick={() => handleDeleteTodo(item.id)}>delete</button>
                    </div>
                )
            })}
            <button onClick={handleAddTodo}>add todo</button>
        </div>
    );
}

export default Todo;