import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){

    return(
        <div className="logo-menu" style={{display: "flex", flexDirection:"row", justifyContent:"space-around", backgroundColor: "lightgrey", marginTop:"20px"}}>
            <div className="menu" style={{ display: 'flex', color: 'black', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p><a href="https://squareup.com/store/thatsgoodchocolate" style={{ textDecoration: 'none', color: 'black' }}>Order Here</a></p>
                <p><Link to="/locations" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Locations</Link></p>
                <p><Link to="/contact" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Contact</Link></p>
                <p><Link to="/about" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>About Us</Link></p>
                <p><Link to="/" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Home</Link></p>
            </div>
        </div>

    )
}