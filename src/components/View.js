import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback,CardSubtitle } from 'reactstrap';
import '../App.css';
import ImageUploader from 'react-images-upload';
import Footer from './Footer'
import SearchField from "react-search-field";
import {Files} from './Files'
class View extends Component {
    
    constructor(props){
        super(props);
        this.state={
            insurance:Files
        };

    }

    render()
        {
        var imgstyle={
            height: "300px",
            width:"100%",
            border: '4px solid black',
            margin:'10px auto'
        };
      



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
            </div>

        </div>
        <Footer/>
        </div>
        );
    }
}

export default View;