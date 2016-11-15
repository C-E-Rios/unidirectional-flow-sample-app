import angular from 'angular';
import todoComponent from './todo.component';

let todoModule = angular.module('todo', [])

.component('todo', todoComponent)

.name;

export default todoModule;
