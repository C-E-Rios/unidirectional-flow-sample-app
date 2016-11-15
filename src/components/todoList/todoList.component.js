import template from './todoList.html';

let todoListComponent = {
    bindings: {
        todos: '<',
        onComplete: '&',
        onDelete: '&'
    },
    template
};

export default todoListComponent;
