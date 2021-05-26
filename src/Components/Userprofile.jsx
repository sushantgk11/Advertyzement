import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import "./Userprofile.css"; 
import Navbar from './Navbar';
import Card from './Card';


function Userprofile(){

const [userData, setuserData] = useState(null)
const [isLoading, setLoading] = useState(false);

function getUserData(){
    setLoading(true);
    fetch('https://reqres.in/api/users?page=1').then(response => response.json()).then(data => {setuserData(data);setLoading(false)})   
}

return (<div className="main">
        <Navbar getUser={getUserData}/>
        <div className="card-container">
            {isLoading==true ? 
            <div className="loader">
                <ReactLoading type={"spinningBubbles"} color={"blue"} height={'5%'} width={'5%'} /> 
            </div> : userData!=null ? 
            userData.data.map((val)=>{
                 return(<><Card imgURL={val.avatar} 
                                id={val.id} 
                                firstName={val.first_name} 
                                lastName={val.last_name} 
                                email={val.email}/> 
                        </>)
                        }):"" 
            }
        </div>
    </div>)
}

export default Userprofile;