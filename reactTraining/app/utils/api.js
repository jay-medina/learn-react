import axios from 'axios';

function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return axios.get(encodedURI).then(function(response) {
    return response.data.items;
  });
}

function battle(players) {
  return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
}

function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}`).then(function(response){
    return response.data;
  });
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`).then(function(response){
    return response.data;
  });
}

function getStarCount(repos) {
  return repos.reduce(function(total, next) {
    return total + next.stargazers_count;
  }, 0);
}

function calculateStore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player),
  ]).then(function(data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile,
      score: calculateStore(profile, repos),
    };
  });
}

function sortPlayers(players) {
  return players.sort((a,b) => {
    return b.score - a.score;
  });
}

export {
  fetchPopularRepos,
  battle,
}
