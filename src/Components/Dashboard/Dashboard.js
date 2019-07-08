import React, {Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {updateVehicleProfiles} from '../../ducks/reducer';
// import {Link} from 'react-router-dom';



export default class Dashboard extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: this.props.userid,
      vehicle_profiles: []
    }
  }


    render(props){

    return(
        <div className="dashboard" style={{display: "flex", flexDirection:"column"}}>

            <div className= "banner">
            <a href='https://squareup.com/store/thatsgoodchocolate'><button style={{backgroundColor: "rgb(124, 6, 6)", color:"white", position:"bottom-center", borderRadius:"5%",borderColor:"transparent", width: "20%", height:"10%", fontWeight:"bold", position:"absolute", bottom:"-60px", left:"45%"}}>Shop Now</button></a>
            </div>
            <div style={{textAlign:'center'}}>
              <h2>Featured Products</h2>
              <div className="featured-row" style={{paddingBottom:'20px'}}>
                  <div >
                    <div id="clusters-featured"></div>
                    <p>Clusters</p>
                  </div>
                  <div>
                    <div id="toffee-featured"></div>
                    <p>Toffee</p>
                  </div>
              </div>
            </div>
            <h2 style={{textAlign:'center', marginTop:'50px'}}>Gift Guide</h2>
            <div id="gift-ideas"></div>

            <h2 style={{textAlign:'center'}}>Featured In</h2>
            <div id="article-links"></div>

            <h2 style={{textAlign:'center'}}>Follow Us</h2>
            <div id="social-media" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <div id="fb-logo"></div>
                <div id="insta-logo"></div>
            </div>
            
        </div>

    )
  }
}
