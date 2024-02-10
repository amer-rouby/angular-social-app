import style from './style.scss';
require('angular');
require('angular-route');

var app = angular.module('myApp', ['ngRoute']);

require('./app/index')(app);
