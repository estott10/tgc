import React, {Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {updateVehicleProfiles} from '../../ducks/reducer';
// import {Link} from 'react-router-dom';



export default class Contact extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: this.props.userid,
      vehicle_profiles: []
    }
  }


    render(){

    return(
        <div className="dashboard">

            <h1> Contact Us</h1>
            number
            form
            {/* <Form>
                <input></input>
                <input></input>
                <input></input>
            </Form> */}
        </div>
    )
  }
}