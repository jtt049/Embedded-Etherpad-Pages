import React, {Component} from 'react';
import { render  } from 'react-dom';
import { Meteor } from 'meteor/meteor'
import App from '../imports/client/App';



if(Meteor.isClient){
	Meteor.startup(function(){
		ReactDOM.render(<App />, document.getElementById("render-target"));
	});
}