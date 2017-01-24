const axios = require('axios');
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
//add this to get request if 429
var param = `?client_id=${id}&client_secret=${sec}`;

var url = 'https://api.github.com/users/';
//var json = 'app/util/data.json';

function getUserInfo(username) {
  //return axios.get(json);
  return axios.get(url + username);
}

const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(getUserInfo))
                .then(function(info) {
                  return info.map(user => user.data);
                })
                .catch(function(err) {
                  console.warn('Error in getPlayersInfo', err);
                })
  }
};

module.exports = helpers;