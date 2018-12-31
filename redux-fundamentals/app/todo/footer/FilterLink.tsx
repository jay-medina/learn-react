import React, { SFC, Dispatch } from 'react';
import { connect } from 'react-redux';
import { VisibilityFilter, TodoApp, TodoAppAction } from '../types';
import { setFilterAction } from '../actions/actions';

interface StateProps {
    active: boolean;
}

interface DispatchProps {
    onClick(): void;
}

interface OwnProps {
    filter: VisibilityFilter;
}

type LinkProps = StateProps & DispatchProps;

type MSTP = (state: TodoApp, ownProps: OwnProps) => StateProps;
type MDTP = (dispatch: Dispatch<TodoAppAction>, ownProps: OwnProps) => DispatchProps;

const mapStateToProps: MSTP = ({ visibilityFilter }, { filter }) => ({
    active: visibilityFilter === filter,
});

const mapDispatchToProps: MDTP = (dispatch, { filter }) => ({
    onClick() {
        dispatch(setFilterAction(filter));
    },
});

const Link: SFC<LinkProps> = ({ onClick, active, children }) => {
    if (active) {
        return <span>{children}</span>;
    }

    const onAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick();
    };

    return (
        <a href="#" onClick={onAClick}>
            {children}
        </a>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
