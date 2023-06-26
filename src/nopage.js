import React from 'react';


const NoPage = () =>(
    <>
        <a href="/" rel="noreferrer">Home</a><br/><br/>
        <a href="/products" rel="noreferrer">
        /products route matches /products, be careful of diff of BrowserRouter and HashRouter. <br/>
        HashRouter is with /#/. <br/>
        BrowserRouter without /#/
        </a><br/>

    <div><h1> No page component</h1></div>
    </>
 );

export default NoPage;