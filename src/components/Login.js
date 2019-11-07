import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';
import {Media} from 'reactstrap';
import '../App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from  'react-facebook-login';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        };


        handleInputChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
    
            this.setState({
                [name]: value
            });
        }

        handleSubmit(event) {
            console.log( JSON.stringify("welcome"+ this.state.username));
            alert(JSON.stringify("welcome"+ this.state.username));
            event.preventDefault();
        }

        




	render(){
		return(
			<div className="container">
			<div className="row">
			<div className="col-sm-12">
			<Media>
            <Media object src='./assets/images/tip.png' alt="Generic placeholder image" />
            </Media>
            </div>
            </div>

            <div className="row">
            <div className="col-sm-12">
            <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={{size: 6, offset: 2}}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="User Name"
                                        value={this.state.username}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Link to="/policynumber"><Button type="submit" color="primary" >
                                        Login
                                       
                                    </Button> </Link>
                                </Col>
                            </FormGroup>
                            </Form>

			</div>
			

			
			<div className="col-sm-4">
			</div>
			<div className="col-sm-2">
					<h4>Or</h4>
			</div>
			<div className="col-sm-4">
			</div>
			</div>

			<div className="row">
			<div className="col-sm-12">
        	<GoogleLogin
        	buttonText="Login with Google"
        	className="button"
        	/>
        	</div>
        	</div>
        	<div className="row">
        	<div className="col-sm-12">
        	<Button  type="submit" color="primary" className="button">
        	Login with FacebookLogin
        	</Button>
        	
      		
      		</div>
			</div>

			</div>
		)
	}
}

export default Login;