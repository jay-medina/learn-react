import React from 'react';

function PlayerInfo({playerName, playerImage}) {
  return (
    <div>
      <div>{playerName}</div>
      <div>{playerImage}</div>
    </div>
  )
}

export default PlayerInfo;
