import React, {Component} from 'react';
import { render  } from 'react-dom';
import { Meteor } from 'meteor/meteor'
import App from '../imports/client/App';
import Iframe from 'react-iframe';
import ReactCountdownClock from 'react-countdown-clock';


	Meteor.startup(function(){
		render(<App />, document.getElementById("render-target"));
	});
