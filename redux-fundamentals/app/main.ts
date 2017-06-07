import {createStore} from 'redux';
import { Action as CounterAction, counter} from './reducer/Counter';

const store = createStore(counter);

console.log(store.getState());

function render() {
  document.body.innerText = `My count is ${store.getState()}`;
}
store.subscribe(render)

document.addEventListener('click', () => {
  store.dispatch<CounterAction>({ type: 'INCREMENT'});
});

render();

