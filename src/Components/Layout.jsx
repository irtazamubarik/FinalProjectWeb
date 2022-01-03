import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/index.css";

const Layout = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container homeContent">
                        <h1>{props.name}
                        </h1>
                        <h4 className="my-3">
                            {props.content}
                        </h4>
                        <div className="mt-3">
                            <NavLink className="btn btn-get-Started" to={props.visit}>{props.btname}</NavLink>
                        </div> 
            </div>
        </section>
        </>
    );
};

export default Layout;

