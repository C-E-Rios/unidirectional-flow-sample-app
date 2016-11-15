import template from './todo.html';

let todoComponent = {
    template,
    bindings: {
        item: '<',
        onChange: '&',
        onRemove: '&'
    }
};

export default todoComponent;
