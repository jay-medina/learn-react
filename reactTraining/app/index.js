var USER_DATA = {
  name: 'Jose Medina',
  username: 'mrfunkycold',
  image: 'https://avatars1.githubusercontent.com/u/2460039?v=3&u=e198fc7d42981a6f30d8bc16357e5e57508d5cb8&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = function(props) {
  return (
    <img src={props.imageUrl} />
  )
};

var ProfileLink = function(props) {
  return (
    <div>
      <a target="_blank" href={`https://github.com/${props.username}`}>
        {props.username}
      </a>
    </div>
  )
};

var ProfileName = function(props) {
  return (
    <div>{props.name}</div>
  )
};

var Avatar = React.createClass({
  render() {
    return <div>
      <ProfilePic imageUrl={this.props.user.image} />
      <ProfileName name={this.props.user.name} />
      <ProfileLink username={this.props.user.username} />
    </div>
  }
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));