import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router'

const callAPI = () => {
    
}
function CallAPI(props) {
    const [users, setUsers] = useState({});
    const router = useRouter();
    console.log('router', router);
    const id = 1
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
                cancelToken: cancelToken.token
            })
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                if(axios.isCancel(err)) {
                    console.log('Cancelled');
                } else {
                    // todo: handle error
                }
            })
        
        return () => {
            cancelToken.cancel()
        }

    }, [])
    return (
        <div>
            <p>Name: {users.name}</p>
            <p>username: {users.username}</p>
            <p>email: {users.email}</p>
        </div>
    );
}

export default CallAPI;