import * as React from 'react';
import Link from './Link.tsx';

export interface FooterProps {
  selected: string,
  setVisibilityFilter: (filter:string) => void
}

function Footer<FooterProps>(props) {
  const {selected, setVisibilityFilter} = props;

  function onLinkClick(filter) {
    return () => setVisibilityFilter(filter);
  }

  return (
    <p>
      <label className="filteritem">Show:</label> 
      <Link active={selected === 'SHOW_ALL'} onLinkClick={onLinkClick("SHOW_ALL")}>All</Link>
      <Link active={selected === 'SHOW_ACTIVE'} onLinkClick={onLinkClick("SHOW_ACTIVE")}>Active</Link>
      <Link active={selected === 'SHOW_COMPLETED'} onLinkClick={onLinkClick("SHOW_COMPLETED")}>Completed</Link>
    </p>
  )
}

export default Footer;