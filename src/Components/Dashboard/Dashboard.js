import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
            <button id="shop-now"><a href='https://squareup.com/store/thatsgoodchocolate' style={{textDecoration: "none", color:"white"}}>Shop Now</a></button>
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
            <h2 style={{textAlign:'center', marginTop:'50px', fontStyle:"italic"}}>Gift Guide</h2>
            <div id="gift-ideas"></div>

            <h2 style={{textAlign:'center'}}>Featured In</h2>
            <div id="articles" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <a href="https://www.wral.com/-that-s-good-chocolate-is-what-zebulon-mom-grandma-creates/15324117/" target="_"><div id="article-link1"></div></a>
            <a href="https://wakemedvoices.org/2016/05/thats-good-chocolate/" target="_"><div id="article-link2"></div></a>
            </div>
            
            <h2 style={{textAlign:'center'}}>Follow Us</h2>
            <div id="social-media" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <a id="fb-logo" href="https://www.facebook.com/ThatsGoodChocolate" target="_"><div></div></a>
                <a id="insta-logo" href="https://www.instagram.com/thatsgoodchocolate" target="_"><div></div></a>
            </div>
            
        </div>

    )
  }
}
