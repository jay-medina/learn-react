import * as React from 'react';

export interface LinkProps {
  onLinkClick: (filter:string) => void,
  active: boolean,
}

function Link<LinkProps>(props) {
  const {active, children, onLinkClick} = props;

  const onClick = function(e) {
    e.preventDefault();
    onLinkClick();
  }

  if(active) {
    return <span className="filteritem">{children}</span>
  }

  return (
    <a className="filteritem" href="#" onClick={onLinkClick}>
        {children}
    </a>
  )
}

export default Link;