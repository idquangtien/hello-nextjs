import React from 'react';
import { useQuery } from "react-query";
import servives from '../../services/UserServices';

const Users = () => {
    const { isLoading, isError, isFetched, data } = useQuery("users", servives.fetchUsers);
    
    return (
        <div>
            {isLoading && <div>loading...</div>}
            {isError && <div>isError...</div>}
            
            {JSON.stringify(data)}
            {isFetched && <div>isFetched...</div>}
        </div>
    );
};

export default Users;