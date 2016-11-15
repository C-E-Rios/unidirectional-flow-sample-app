import angular from 'angular';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoList', [])

.component('todoList', todoListComponent)

.name;

export default todoListModule;
