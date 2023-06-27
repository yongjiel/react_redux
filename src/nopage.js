import React from 'react';


const NoPage = (props) => {
    const second_url = "/products";
    return (
    <>
        <a href="/" rel="noreferrer">Home</a><br/><br/>
        <a href={second_url} rel="noreferrer">
        /products route matches {second_url}, be careful of diff of BrowserRouter and HashRouter. <br/>
        HashRouter is with /#/. <br/>
        BrowserRouter without /#/
        </a><br/>

    <div><h1> No this URL - {props.url} </h1></div>
    </>
 );
};

export default NoPage;