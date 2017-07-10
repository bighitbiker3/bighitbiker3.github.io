import React from 'react'

class PortfolioCurtain extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      scroll: false,
      clicked: false
    }
    this.showOverlay = this.showOverlay.bind(this)
  }

  showOverlay(){
    this.setState({clicked: !this.state.clicked});
  }

  render(){

    return (
      <div className="curtain" style={this.props.style} onClick={this.showOverlay}>
        <div className="intro-text-div">
          <p className='intro-text'>Hi 🤗.</p>
          <p className='intro-text'>My name's Elliott and I'm a Javascript developer.</p>
          <p className='intro-text'>I like to make things.</p>
          <p className='intro-text'>My favorite emojis are 😔, 😭, and 😴.</p>
          {this.state.clicked &&
            <div className="techOverlay">
            <div className="page-header-overlay">
            </div>
              <div className="techOverlay-text">
                <h1>💦💦💦</h1>
                <h1>I really like flexxin and finessin'.</h1>
                <h1>I also love 3D art, food, music, and exercise. I could talk about code and music all day so hmu</h1>
              </div>
              <div className="techOverlay-links">
                <a href='https://instagram.com/producerlifestyle' target='_blank' rel="noopener noreferrer"><p>The Gram</p></a>
                <a href='https://twitter.com/elliottmcnary' target="_blank" rel="noopener noreferrer"><p>Twitter</p></a>
              </div>
            </div>
          }
        </div>
        <div className="footer">
          <div className="month">
            <a href="https://github.com/bighitbiker3" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
          </div>
          <div className="year">
            <a href="mailto:elliottmcnary@gmail.com?Subject=Sup" target="_top"><p>Contact</p></a>,
          </div>
        </div>
      </div>
    )
  }
};

export default PortfolioCurtain
