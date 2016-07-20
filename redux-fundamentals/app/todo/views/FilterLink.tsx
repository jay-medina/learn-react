import * as React from 'react';

export interface FilterLinkProps {
  onFilterClick: (filter:string) => void,
  filter: string,
  selected: string
}

class FilterLink extends React.Component<FilterLinkProps,{}> {
  onClick(e) {
    e.preventDefault();
    const {filter} = this.props;
    this.props.onFilterClick(filter);
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