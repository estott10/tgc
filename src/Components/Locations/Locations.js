import React, {Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {updateVehicleProfiles} from '../../ducks/reducer';
// import {Link} from 'react-router-dom';



export default class Locations extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: this.props.userid,
      vehicle_profiles: []
    }
  }


    render(props){

    return(
        <div className="locations">
            <div >
                <h2>Morgan Street Food Hall</h2>
                <p>411 W. Morgan St.</p>
                <p>Raleigh, NC 27603</p>
            </div>
    
            <a id="map-image" href = "https://goo.gl/maps/Jkgcp9ks2a9o2TwR6" target= "_"> 
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.4019956744073!2d-77.42334959261682!3d35.37048442543107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aece58b330ff3d%3A0xc90d0e35f002c237!2s836+NC-118%2C+Grifton%2C+NC+28530!5e0!3m2!1sen!2sus!4v1562553747662!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            </a>
        </div>

    )
  }
}