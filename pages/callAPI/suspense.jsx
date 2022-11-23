import React, { Suspense } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import dynamic from "next/dynamic";

const callAPI = async (url = 'https://jsonplaceholder.typicode.com/users') => {
    const { data } = await axios.get(url)
    return data;
}
const Users = () => {
    useEffect(() => {
        callAPI();
    }, []);
    return (
        <div>Users</div>
    );
}
const SuspenseComponent = dynamic(() => <Users />, { suspense: true });
function SuspensePage(props) {

    return (
        <Suspense fallback={<div>loading...</div>}>
            <SuspenseComponent />
        </Suspense>
    );
}

export default SuspensePage;