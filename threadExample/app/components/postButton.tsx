import * as React from 'react';

export interface PostButtonProps {
  active: boolean
}

class PostButton extends React.Component<PostButtonProps,{}> {
  onClick(e) {
    if(this.props.active !== undefined && this.props.active) {
      return;
    }

    e.preventDefault();
  }
  getClassNames() {
    if(this.props.active) {
      return 'postBtn active';
    }
    return 'postBtn';
  }
  render() {
    return (
      <div className="buttonContainer">
          <button onClick={this.onClick.bind(this)} 
                  className={this.getClassNames()}>Post</button>
      </div>
    );
  }
}

export default PostButton;