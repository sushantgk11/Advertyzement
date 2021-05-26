import React from 'react';
import './Navbar.css';

function Navbar(prop){
    return(<><nav>
        <span>SGK</span>
        <ul>
           <button id="getUser" onClick={prop.getUser}>Get Users</button>
        </ul>
    </nav></>)
}

export default Navbar