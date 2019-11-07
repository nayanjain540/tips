import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../App.css';
import Footer from './Footer';
import Home from './HomePage';
import Signup from './SignUp';
import Login from './Login';
import PolicyNumber from './PolicyNumber'
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import View from './View';
import Add from './Add';
class Main extends Component{
	render(){
		const bg={
			backgroundColor:"light-blue"
		}
		return(
			<div className="App" style={{backgroundColor:'#add8e6'}}>
				<div className="body" style={{backgroundColor: '#add8e6'}}>
					<div>
						<BrowserRouter>
			 					<Switch>
              					<Route path='/home'		component={	() =>	<Home/>} />
              					<Route path='/signup'	component={ () => 	<Signup />} />
              					<Route path='/login'	component={	()=>	<Login />} />
              					<Route path='/policynumber'	component={	()=>	<PolicyNumber />} />	
              					<Route path='/view'	component={	()=>	<View />} />
              					<Route path='/add'	component={	()=>	<Add />} />
              					<Redirect to="/home" />
          						</Switch>
          				< /BrowserRouter >			
          			</div>
						</div>
						</div>

			)
	}
}
export default Main;