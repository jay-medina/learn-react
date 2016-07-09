import {counter, CounterActions} from './counterReducer.ts';
import {createStore} from 'redux';

export default function test() {

  const store = createStore(counter);
  function render() {
    document.body.innerText = store.getState().toString();
  }

  store.subscribe(render);

  document.addEventListener('click', () => {
    store.dispatch({ type: CounterActions.INCREMENT });
  });

  render();
  console.log('done');
}
