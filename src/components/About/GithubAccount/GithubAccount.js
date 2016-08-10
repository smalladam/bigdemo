import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';
import CircularProgress from 'material-ui/CircularProgress';



class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: {},
      wait: true,

    };
  }
  componentDidMount() {
    github.getGithubInfo('smalladam')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait: false,
        });
      });
  }
  render(){
    let styles={
      word:{
        fontSize:"16px",
        color:"#000",
        float:"left"
      },
      circle:{
        float:"right",

      }
    }
    var GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }
    return(
      <div className='account'>
        <Card className="content">
          {this.state.wait ? <p style={styles.word}>Reading Data from Github... Please  waiting...</p> : ''}
          { GitHubInfo }
      {this.state.wait ? <div style={styles.circle}><CircularProgress size={1} /></div> : ''}
        </Card>
      </div>
    )
  }
}

export default GithubAccount;
