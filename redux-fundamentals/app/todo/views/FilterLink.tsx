import * as React from 'react';

export interface FilterLinkProps {
  store: any,
  filter: string,
  selected: string
}

class FilterLink extends React.Component<FilterLinkProps,{}> {
  onClick(e) {
    e.preventDefault();
    const {store,filter} = this.props;

    store.dispatch({
      filter,
      type: 'SET_VISIBILITY_FILTER'
    })
  }
  
  render() {
    const {selected, filter, children} = this.props;

    if(selected === filter) {
      return <span className="filteritem">{children}</span>;
    }

    return (
      <a className="filteritem" href="#"
        onClick={this.onClick.bind(this)}>{children}</a>
    )
  }
}

export default FilterLink;