import axios from 'axios';

function getRepos(username){  //第一个API请求
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
};

function getUserInfo(username){  //第二个API请求
  return axios.get(`https://api.github.com/users/${username}`);
};

let github = {
  getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,    //第一个返回的数据
          user: arr[1].data     //第二个返回的数据
        }
      });
  }
};

export default github;
