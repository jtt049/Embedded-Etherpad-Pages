import React, {Component} from 'react';
import Iframe from 'react-iframe';
import ReactTimeout from 'react-timeout';



export default class App extends Component{
	state={
		on: false
		}
	toggle =() => {
			this.setState({on:!this.state.on})
		}


	handleClick=(e) =>{
	this.props.setTimeout(this.toggle, 5000)
}
	

	render(){
		return(
			<div>
			<p>Hello world, where is button?</p> 
			<div style={{backgroundColor: (this.state.on ? 'yellow': 'gray')}}>
			<button onClick={this.handleClick}>Click me! </button>
			</div>

			<Iframe url="https://beta.etherpad.org/p/Test1?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false"  width="1280px" height="720px" display="initial" position="relative" allowFullScreen/>
			
			</div>
		
			);
	}
}

/*	class Heading extends Component{
		render(){
			return (
				<h1>{this.props.count}</h1>
				)
		}
	}
*/	