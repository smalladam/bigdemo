import React from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#212121',
        padding:'30px 10px'
      },
    }
    return(
      <div style={styles.root}>
        <p>更多信息 请添加我的微信</p>
        <p>微信号：<b>GSJQ--ZZY</b></p>

      </div>
    )
  }
}

export default Footer;
