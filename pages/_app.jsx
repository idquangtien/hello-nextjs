import React from 'react';
import { Provider } from "react-redux";
import store from '../redux/store';
import '../public/css/styles.css';

import setupServer from '../fakeApis';
import Head from 'next/head';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
    setupServer({ environment: "development" })
}



const MyApp = ({ Component, pageProps, ...props }) => {

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Head>
                </Head>
                <Component {...pageProps} />
            </Provider>
        </QueryClientProvider>
    );
};

export default MyApp;
