import * as frmStore from './store'
import {renderTodos} from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

export const initialState = {
  loaded: false,
  loading: false,
  data: []
};

const reducers = {todos: frmStore.reducer};
const store = new frmStore.Store(reducers, {todos: initialState});


button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;
    const payload = {label: input.value, complete: false};
    store.dispatch(new frmStore.AddTodo(payload))
    console.log(store.value);

    input.value = '';
  },
  false
);

const unsubscribe = store.subscribe(state => {
  renderTodos(state.todos.data)
})

destroy.addEventListener('click', unsubscribe, false);


todoList.addEventListener('click', function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    console.log(todo);
    store.dispatch(new frmStore.DeleteTodo(todo))
  }
});

