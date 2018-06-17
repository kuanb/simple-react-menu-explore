import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './App';
import './App.css';

import 'font-awesome/css/font-awesome.min.css';

const availableModules = [
	{
		key: 'environment',
		color: '#305b2d',
		'icon': 'fa-tree',
		modules: [
			{key: 'greenhouse gas'},
			{key: 'protected species'}]
	}, {
		key: 'mobility',
		color: '#066da0',
		'icon': 'fa-bus',
		modules: [
			{key: 'walk accessibility'},
			{key: 'transit accessibility'},
			{key: 'travel patterns'}]
	}, {
		key: 'resiliency',
		color: '#772016',
		'icon': 'fa-fire',
		modules: [
			{key: 'flood'},
			{key: 'fire'},
			{key: 'earthquake'}]
	}
]

ReactDOM.render(<Menu availableModules={availableModules} />, document.getElementById('root'));
