import angular from 'angular';
import Todo from './todo/todo.module';
import TodoList from './todoList/todoList.module';
import TodoForm from './todoForm/todoForm.module';

let componentModule = angular.module('app.components', [
    Todo,
    TodoList,
    TodoForm
])

.name;

export default componentModule;
