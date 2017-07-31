import React, {Component} from 'react';
import Iframe from 'react-iframe';
import ReactCountdownClock from 'react-countdown-clock';



export default class App extends Component{
	constructor(){
		super()
  	    this.state= {
  	    	isButtonOn : true
  	    };
	}


	showButton(){
		this.setState( {isButtonOn: false});

	}
	
	render(){
		return(
			<div id="whole">

			<div id="counter">
				<ReactCountdownClock  seconds={60} color="#000" alpha={1.0} size={100} onComplete={this.showButton} />
			</div>
			<div id="paragraph">
				<p>Insert Pararaph here</p> 
			</div>
			<div id="next">
				<button disabled={this.state.isButtonOn}> Next >> </button>
			</div>
			<div id="frame">
				<Iframe url="https://beta.etherpad.org/p/Test1?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false"  width="1280px" height="720px" display="initial" position="relative" allowFullScreen/>
			</div>


			</div>
		
			);
	}
}	