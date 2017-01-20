var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  getInitialState() {
    return {
      username: ''
    }
  },
  onSubmitUser(e) {
    e.preventDefault();
    const {username} = this.state;

    this.setState({
      username: ''
    });

    console.log()

    if(this.props.routeParams.playerOne) {
      this.props.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    }
    else {
      this.props.router.push('/playerTwo/' + username);
    }
  },
  onUpdateUser(e) {
    this.setState({username: e.target.value})
  },
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1> {this.props.route.header} </h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input className="form-control" 
                     placeholder="Github Username"
                     onChange={this.onUpdateUser}
                     value={this.state.username}
                     type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = PromptContainer;