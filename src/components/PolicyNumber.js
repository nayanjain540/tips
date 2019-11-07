import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';
import '../App.css';
import ImageUploader from 'react-images-upload';
import Footer from './Footer'
class PolicyNumber extends Component {
    
        constructor(props){
            super(props);
            this.state = {
                Name: '',
                Company: '',
                IssuedDate: '',
                LastDate: '',
                PremiumAmt:'',
                PaymentMethod:'',
                PaymentPeriod: '',
                Age: '',
                Premium_Due_Date:'',
                Claim:'',
                picture:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);

        }
    
        onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
      
    


        handleInputChange(event) {
            const target = event.target;
            const value = target.type === target.value;
            const name = target.name;
    
            this.setState({
                [name]: value
            });
        }

        handleSubmit(event) {
            console.log('Current State is: ' + JSON.stringify(this.state));
            alert('Current State is: ' + JSON.stringify(this.state));
            event.preventDefault();
        }


        render()
        {
            
        const FlexedButtons= () => (
        <div className="container">
        <div className="row">
        <div className="col-sm-1">
        </div>
            <div className="col-sm-4" >
                <Button title="Delete"/>
        </div>
        <div className="col-sm-1">
        </div>
        <div className="col-sm-4">
            <Button title="Update"/>
        </div>
        </div>
        </div>
        );
        

        return(
        <div style={{backgroundColor:'#add8e6'}}>
            <div className="container">
            <div className="row row-content">
                <div className="col-sm-5">
                </div>
                <div className="col-sm-2">
                <h3>Policy Number</h3>
                </div>
                <div className="col-sm-5">
                </div>
                    <div className="col-sm-12">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="Name" md={2}>Name</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="Name" name="Name"
                                        placeholder="Name"
                                        value={this.state.Name}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Company" md={2}>Company</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="Company" Company="Company"
                                        placeholder="Company"
                                        value={this.state.Company}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="IssuedDate" md={2}>IssuedDate</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="IssuedDate" IssuedDate="IssuedDate"
                                        placeholder="IssuedDate"
                                        value={this.state.IssuedDate}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="LastDate" md={2}>LastDate</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="LastDate" LastDate="LastDate"
                                        placeholder="LastDate"
                                        value={this.state.LastDate}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="PremiumAmt" md={2}>PremiumAmt</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="PremiumAmt" PremiumAmt="PremiumAmt"
                                        placeholder="PremiumAmt"
                                        value={this.state.PremiumAmt}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="{PaymentMethod}" md={2}>PaymentMethod</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="PaymentMethod" PaymentMethod="PaymentMethod"
                                        placeholder="PaymentMethod"
                                        value={this.state.PaymentMethod}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="{PaymentPeriod}" md={2}>PaymentPeriod</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="PaymentPeriod" PaymentPeriod="PaymentPeriod"
                                        placeholder="PaymentPeriod"
                                        value={this.state.PaymentPeriod}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="{Age}" md={2}>Age</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="Age" Age="Age"
                                        placeholder="Age"
                                        value={this.state.Age}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="{Premium_Due_Date}" md={2}>Premium_Due_Date</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="Premium_Due_Date" Premium_Due_Date="Premium_Due_Date"
                                        placeholder="Premium_Due_Date"
                                        value={this.state.Premium_Due_Date}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="{Claim}" md={2}>Claim</Label>
                                <Col md={{size: 6, offset: 10}}>
                                    <Input type="text" id="Claim" Claim="Claim"
                                        placeholder="Claim"
                                        value={this.state.Claim}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                             </Form>
                             </div>
                            </div>

                            <div className="row">
                            <div className="col-sm-12">
                                     <ImageUploader
                                        withIcon={true}
                                        buttonText='Choose images'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}/>



                            </div>
                            </div>



                            <div className="row">
                            <div className="col-sm-3">
                                    <Link to="/home">
                                    <Button type="submit" color="primary">
                                        Delete
                                       </Button> 
                                       </Link>
                                </div>
                                 <div className="col-sm-3">
                                    <Link to="/home">
                                    <Button type="submit" color="primary">
                                        Update
                                       </Button> 
                                       </Link>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-12">
                           
                            </div>
                            </div>

                        </div>
                         <Footer/>
                         </div>

        );
    }
}

export default PolicyNumber;