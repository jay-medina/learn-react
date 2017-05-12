import React from 'react';
import {parse} from 'query-string';
import {Link} from 'react-router-dom';
import { battle } from '../utils/api';
import Player from './player';

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }
  componentDidMount () {
    const players = parse(this.props.location.search)
    battle([
      players.playerOneName,
      players.playerTwoName,
    ]).then((results) => {
      if(results === null) {
        return this.setState(() => {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github',
            loading: false,
          };
        });
      }

      this.setState(() => {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false,
        };
      });
    });
  }
  render() {
    const {winner,loser,error,loading} = this.state;

    if(loading) {
      return <p>loading</p>
    }

    if(error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player label="Winner"
          score={winner.score}
          profile={winner.profile}
        />
        <Player label="Loser"
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    );
  }
}

export default Results;
