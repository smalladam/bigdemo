import React, { PropTypes } from 'react';

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
        background: 'url("http://img1.3lian.com/img013/v4/9/d/67.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        fontSize:'48px',
        margin:"0",
        paddingTop:'200px',
      },
      span:{
        color:'#fff',
        fontSize:'42px',
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)'
      }
    }
    return(
      <div>
        <div style={styles.root}>
          <div style={styles.cover}>
            <h1 style={styles.title}>WELCOME TO<br/><span style={styles.span}>MY WEB  SITE</span></h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
