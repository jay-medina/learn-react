import React from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from './playerInfo';

function Player(props) {
  const {profile} = props;
  console.log(profile);
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign:'center'}}>Score: {props.score}</h3>
      <PlayerInfo
          playerName={profile.login} 
          playerImage={profile.avatar_url}>
        <div className="information">
          <div>{profile.name}</div>
          <div>{profile.location}</div>
          <div>{profile.company}</div>
          <div>Followers: {profile.followers}</div>
          <div>Following: {profile.following}</div>
          <div>Public Repos: {profile.public_repos}</div>
          <div>
            <a href={profile.html_url} target="_blank">{profile.html_url}</a>
          </div>
        </div>
      </PlayerInfo>
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Player;
