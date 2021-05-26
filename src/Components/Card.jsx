import React from 'react';
import './Card.css';

function Card(props){
return(<>
    <div className="card">
        <div className="card-image">
            <img src={props.imgURL} alt="" />
        </div>
        <div className="card-body">
            <h3 className="card-title">
                {props.firstName} {props.lastName}
            </h3>
            <div className="card-text">
                <p>ID : {props.id}</p>
                <p>Email : <span>{props.email}</span></p>
                <button className="viewBtn">View Profile</button>
            </div>
        </div>
    </div>
    </>)

}

export default Card