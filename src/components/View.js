import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback,CardSubtitle } from 'reactstrap';
import '../App.css';
import ImageUploader from 'react-images-upload';
import { Media } from 'reactstrap';

import Camera,{ FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Footer from './Footer'
import SearchField from "react-search-field";
import {Files} from './Files'
class View extends Component {
    
    constructor(props){
        super(props);
        this.state={
            insurance:Files,
            data:''
        };

    }
    onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
    this.setState({
      data:dataUri,

    });
    console.log(this.state.data);
  }

    render()
        {
        var imgstyle={
            height: "300px",
            width:"100%",
            border: '4px solid black',
            margin:'10px auto'
        };
        
        const s= {
        position: 'absolute',
        bottom:0,
        left:0,
        }
        const submitButton= {
        position: 'absolute'
        }
        const bg={
        color:"blue",
        backgroundColor:"#add8e6"
        }





const RenderCard=this.state.insurance.map((ins)=>

        <Card>
            <CardBody>
            <CardTitle>{ins.name}</CardTitle>
            <CardText>{ins.designation}</CardText>
            </CardBody>
            <CardImg src={ins.image} alt={ins.name} style={imgstyle}/>
            
        </Card>

)

        return(
            <div className="container">
            <div className="row row-content-justify">
            <div className="col-sm-12 col-md-12 col-xs-12">
            <h2>View</h2>
            </div>
            <div className="col-sm-12 col-md-12 col-xs-12">
            <SearchField className="button"/>
            </div>


            <div className="col-12 col-xs-12 col-md-12 col-sm-12 m-1">
            {RenderCard}
             <Media>
            <Media object src={this.state.data}/>
            </Media>
            </div>

        </div>
        <Footer/>
        <div className="row">

      
      <div className="App" style={submitButton}>
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
        />
       
      </div>
      </div>

        </div>
        );
    }
}

export default View;