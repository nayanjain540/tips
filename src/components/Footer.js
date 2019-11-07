import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <ul className="list-unstyled">
                        <div className="col-md-3 col-sm-3 col-xs-3"><li><Link to="/Logout">Logout</Link></li></div>
                        <div className="col-md-3 col-sm-3 col-xs-3"><li><Link to="/View">View</Link></li></div>
                        <div className="col-md-3 col-sm-3 col-xs-3"><li><Link to="/add">Add</Link></li></div>
                      <div className="col-md-3 col-sm-3 col-xs-3"><li><Link to="/View">Update</Link></li></div>
                    </ul>
                </div>
             
                </div>
            </div>
        </div>
    
    )
}

export default Footer;