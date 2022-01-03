import React from 'react';
import Layout from './Layout';
import "../Styles/index.css";

const Home = () => {
    return (
        <div>
        <Layout name='We abide by the law and make you do it too.' visit="/services" 
        content='Law made easy by professionals just at the click of a button. Make your appointment now!'
        btname="Get to know us better!"/>
        </div>
    );
};

export default Home;

