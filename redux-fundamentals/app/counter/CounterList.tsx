import * as React from 'react';
import { Counter } from './Counter';
import { CounterListAction } from './reducer';

export interface CounterListProps {
  counters: number[];
  dispatch: (action: CounterListAction) => any;
}

class CounterList extends React.PureComponent<CounterListProps, any> {
  constructor(props: CounterListProps) {
    super(props);
    this.onAddCounterClick = this.onAddCounterClick.bind(this);
    this.onRemoveCounterClick = this.onRemoveCounterClick.bind(this);
  }
  renderCounter(value: number, key: number) {
    return <Counter key={key} value={value} dispatch={this.props.dispatch} />;
  }
  renderListOfCounters() {
    return this.props.counters
        .map((counter, index) => this.renderCounter(counter, index));
  }
  onAddCounterClick() {
    this.props.dispatch({type: 'ADD_COUNTER'});
  }
  onRemoveCounterClick() {
    this.props.dispatch({ type: 'REMOVE_COUNTER', index: this.props.counters.length - 1 });
  }
  render() {
    return (
      <div>
        {this.renderListOfCounters()}
        <hr />
        <p>
          <button className="add-counter" onClick={this.onAddCounterClick}>Add Counter</button>
          <button className="remove-counter" onClick={this.onRemoveCounterClick}>Remove Counter</button>
        </p>
      </div>
    );
  }
}

export default CounterList;
