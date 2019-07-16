import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">
            
            <div className="logo-menu" style={{display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div className="logo"><a href="https://squareup.com/store/thatsgoodchocolate" style={{width: "100%", height: "100%"}}><div></div></a></div>
                <div className="menu" style={{ display: 'flex', color: 'black', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p><a href="https://squareup.com/store/thatsgoodchocolate" style={{ textDecoration: 'none', color: 'black' }}>Order Here</a></p>
                    <p><Link to="/locations" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Locations</Link></p>
                    <p><Link to="/contact" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Contact</Link></p>
                    <p><Link to="/about" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>About Us</Link></p>
                    <p><Link to="/" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Home</Link></p>
                </div>
            </div>
            <div className="sale-banner" style={{ textDecoration: 'none', color: 'white', marginBottom:'0px'}}>
                <p style={{textAlign: 'center', marginBottom:'0px'}}>On Sale Now</p>
                </div>
        </div>

    )
}