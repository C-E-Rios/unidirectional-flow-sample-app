class ScanListContoller {

    constructor (TodoService) {
        'ngInject';
        this.todoService = TodoService;
    }

    $onInit () {
        this.todos = this.todoService.getTodos();
    }

    addTodo ({ label }) {
        this.todos = [{ label, id: this.todos.length + 1 }, ...this.todos];
    }

    completeTodo ({ todo }) {
        this.todos = this.todos.map(
            item => item.id === todo.id ? Object.assign({}, item, { complete: true }) : item
        );
    }

    removeTodo ({ todo }) {
        this.todos = this.todos.filter(({ id }) => id !== todo.id);
    }

}

export default ScanListContoller;
