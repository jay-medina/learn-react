var React = require('react');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

module.exports = function ConfirmBattle(props) {
  if(props.isLoading) {
    return <p> LOADING!</p>
  }
  
  return (
    <div>ConfirmBattle: {puke(props)}</div>
  )
};