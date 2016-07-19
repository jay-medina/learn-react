
function formatDate(timestamp) {
  var currentTime = Date.now();
  var delta = currentTime - timestamp;

  if(delta <= 1000) {
    return "1 second ago";
  }
  
  if(delta <= 1000 * 60){
    return Math.round(delta / 1000) + " seconds ago";
  }
  
  const rDelta = Math.round(delta / (1000 * 60)); //minutes
  console.log(rDelta);

  if(rDelta === 1) {
    return "1 minute ago";
  }

  if(rDelta <= 60) {
    return `${rDelta} minutes ago`;
  } 

  return " A long time ago";
  
}

export {
  formatDate
};