import _ from 'lodash';

import angular from 'angular';

import Components from './components/components.module';
import TodoService from './app/app.service';
import AppComponent from './app/app.component';

angular
    .module('app', [
        Components
    ])
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent)
    .service('TodoService', TodoService);
