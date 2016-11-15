import template from './todoForm.html';
import controller from './todoForm.controller';

let todoFormComponent = {
    template,
    controller,
    bindings: {
        onAdd: '&'
    },
};

export default todoFormComponent;
