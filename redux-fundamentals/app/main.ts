

// console.log(store.getState());

// store.subscribe(() => {
//   document.body.innerText = `${store.getState()}`;
// })

// document.addEventListener('click', () => {
//   store.dispatch<Action>({ type: 'INCREMENT'});
// })
import {createStore} from 'redux';
import {counter} from './reducer/Counter';

const store = createStore(counter);
