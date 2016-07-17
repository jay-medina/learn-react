import * as React from 'react';

class PostButton extends React.Component<{},{}> {
  render() {
    return (
      <div className="buttonContainer">
          <button className="postBtn">Post</button>
      </div>
    );
  }
}

export default PostButton;