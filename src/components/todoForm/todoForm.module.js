import angular from 'angular';
import todoFormComponent from './todoForm.component';

let todoFormModule = angular.module('todoForm', [])

.component('todoForm', todoFormComponent)

.name;

export default todoFormModule;
