var React = require('react');

module.exports = function ConfirmBattle(props) {
  if(props.isLoading) {
    return <p> LOADING!</p>
  }
  
  return (
    <div>ConfirmBattle</div>
  )
};