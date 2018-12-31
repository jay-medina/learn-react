import React, { Dispatch } from 'react';
import { TodoAppAction } from '../types';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/actions';

interface DispatchProps {
    onAddTodo(text: string): void;
}

type Props = DispatchProps;

class AddTodo extends React.Component<Props> {
    state = {
        value: '',
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value,
        });
    };

    onBtnClick = () => {
        const { value } = this.state;
        this.props.onAddTodo(value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.onChange} />
                <button onClick={this.onBtnClick}>Add Todo</button>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAppAction>): DispatchProps => {
    return {
        onAddTodo(text) {
            dispatch(addTodoAction(text));
        },
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
