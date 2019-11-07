import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button'
import Footer from './Footer'
class Home extends Component{
	render(){
		var imgstyle={
			height: "500px",
			width:"100%",
			border: '4px solid black',
			margin:'10px auto'
		};
		
		var button={
			margin:'10px auto'
		};

		

		
		return(
			
			<div className="container" >
			<div className="row" >
			<div className="col-sm-12" >
   			<Media>
            <Media object src='./assets/images/tip.png' style={imgstyle} alt="Generic placeholder image" />
            </Media>
  			</div>
  			</div>

  			<div className="row">
  			<div className="col-sm-12">
  			<Link to="/signup">
  			<Button  variant="primary" size="lg"  style={button} block>
    		Sign Up
  			</Button>
  			</Link>
  			<Link to="/login">
  			<Button variant="primary" size="lg" block>
    		Log In
  			</Button>
  			</Link>
  			</div>      
			</div>
			<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
			</div>

		)
	}

}

export default Home;