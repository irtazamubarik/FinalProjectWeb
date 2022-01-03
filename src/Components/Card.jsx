import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Styles/index.css";

const Card = (props) => {
    return ( 
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card border-dark bg-dark text-white">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                            <h5 className="card-title font-weight-bold text-center">{props.charges}</h5>
                            <h5 className="card-title font-weight-bold text-center">{props.description}</h5>
                            <NavLink to="/contact" className="btn btn-primary">Book Now</NavLink>
                        </div>
                    </div>
            </div>
        </>
     );
}
 
export default Card;