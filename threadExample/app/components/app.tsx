import * as React from 'react';
import Thread from './thread';
import ThreadStarter from './threadStarter';


export interface AppProps {
  store: any,
  person: string
}

export class App extends React.Component<AppProps, {}> {
  renderThreads() {
    const {store, person} = this.props;
    const state = store.getState();

    const keys = Object.keys(state).reverse();

    return keys.map(id => {
      return <Thread key={id} 
                     thread_id={id} 
                     person={person} 
                     threadNodes={state[id]}
                     dispatch={store.dispatch}></Thread>;
    });
  }
  render() {
    const {store, person} = this.props;
    console.log(`state is ${JSON.stringify(this.props.store.getState())}`);
    return (
      <div className="app">
      <ThreadStarter dispatch={store.dispatch} person={person}></ThreadStarter>
      {this.renderThreads()}
      </div>
    );
  }
}
