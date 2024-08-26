import React from 'react';
import Layout from "./Layout";

function Main({Component, pageProps}) {
    console.log("component:", Component);
    console.log("pageProps:", pageProps);

    return (
        <Layout >
            <Component {...pageProps}/>
        </Layout>
    )
}


export default Main;