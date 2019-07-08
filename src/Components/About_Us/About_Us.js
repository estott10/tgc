import React, {Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {updateVehicleProfiles} from '../../ducks/reducer';
// import {Link} from 'react-router-dom';



export default class About_Us extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: this.props.userid,
      vehicle_profiles: []
    }
  }


    render(props){

    return(
        <div className="about-us">
            <div style={{width:'80%'}}>
                <h1>About Us</h1>
                    <p style={{textAlign: 'left'}}>That's Good Chocolate's core ideal is straight forward--people love to eat chocolate…"good" chocolate.  That's Good Chocolate’s founder has been making sweets for family and friends for over two decades and has developed several "good" recipes that make our “good” chocolate some of the best you will ever eat. We offer so many combinations that you’re bound to find something you’ll love! That's Good Chocolate bags also make great gifts...if you can bring yourself to share them.</p>
            </div>
            <div id='about-us-image'></div>
        </div>

    )
  }
}