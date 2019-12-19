import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">
            <div className="sale-banner" style={{ textDecoration: 'none', color: 'white', margin:'0px'}}>
                <p style={{textAlign: 'center', marginBottom:'10px', marginTop: '0px', fontStyle:"italic", fontSize:"100%"}}> 1 Day Left to Order for Gauranteed Delivery By Christmas</p>
                <p style={{textAlign: 'center', marginBottom:'10px', marginTop: '0px', fontStyle:"italic", fontSize:"100%"}}>We're So Glad You're Here! Orders placed by December 19th at 5PM EST are expected to arrive on or before December 24th. </p>
                </div>
            
            <div className="logo-menu" id="header-menu" style={{display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div className="logo" style={{width: "100px", height: "100px"}}><a href="https://squareup.com/store/thatsgoodchocolate" style={{width: "200px", height: "200px"}}><div></div></a></div>
                <div className="menu" style={{ display: 'flex', color: 'black', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p><a href="https://thatsgoodchocolate-107815.square.site/s/shop" style={{ textDecoration: 'none', color: 'black' }}>Order Here</a></p>
                    <p><Link to="/locations" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Locations</Link></p>
                    <p><Link to="/contact" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Contact</Link></p>
                    <p><Link to="/about" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>About Us</Link></p>
                    <p><Link to="/" style={{ textDecoration: 'none', color: 'black', padding: "0px 20px", margin: '0px' }}>Home</Link></p>
                </div>
            </div>
        </div>

    )
}