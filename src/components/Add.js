import React, { Component } from 'react';
import Camera,{ FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Footer from './Footer';
import ImageUploader from 'react-images-upload';
import { Media } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:''
    }
  }



  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
    this.setState({
      data:dataUri,

    });
    console.log(this.state.data);
  }
  
  render () {
      const s= {
    position: 'absolute',
    bottom:0,
    left:0,
  }
  const submitButton= {
    position: 'absolute',
    top:70,
    left:0,
  }
  const bg={
  color:"blue",
  backgroundColor:"#add8e6"
  }


    
    return (
      <div className="container" style={bg}>
      <div className="row">
      <h2>Add</h2>

      
      <div className="App" style={submitButton}>
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
        />
        <Media>
            <Media object src={this.state.data} alt="Generic placeholder image" />
            </Media>
      </div>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
       <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
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
                            <br/>
                            
      <Footer/>
      </div>
    );
  }
}
 
export default App;