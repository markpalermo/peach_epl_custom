import peachRc from '../../.peachrc';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularCache from 'angular-cache';
import angularCookies from 'angular-cookies';
import angularMaterial from 'angular-material';
import angularRoute from 'angular-route';
import angularSanitize from 'angular-sanitize';
import 'lodash';
import 'ng-peach';

import 'angular-material/angular-material.min.css';
import 'peach.css';

import routing from './app.config';

// Components
import Home from './components/home/home';

angular.module(peachRc.framework.angular.module, [
  angularAnimate,
  angularAria,
  angularCache,
  angularCookies,
  angularMaterial,
  angularRoute,
  angularSanitize,
  'ngPeach.ui'  // Need to fix this to export properly from ngPeach
])
  .config(routing)
  .controller(Home.controllerName, Home.controller);

export default peachRc.framework.angular.module;
