import * as React from 'react';

export interface AddTodoProps {
  onAddClick: (inputValue: string) => void;
}

export default class extends React.PureComponent<AddTodoProps, any> {
  constructor(props: AddTodoProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputValue : '',
    };
  }
  onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }
  onClick() {
    return () => {
      const value = this.state.inputValue;
      this.setState({ inputValue: '' });
      this.props.onAddClick(value);
    };
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} value={this.state.inputValue} />
        <button onClick={this.onClick()}>Add Todo</button>
      </div>
    );
  }
}
