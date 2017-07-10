import React from 'react'
import TechOverlay from './TechOverlay'
import cx from 'classnames';

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
        <div style={this.state.clicked ? {display: 'none'} : null} className={cx('page-header glitch')}>
          {this.props.title}
        </div>
        <div className="image-div">
          {
            typeof this.props.image === 'string'
            ? <img alt='site' className="portfolioImage" style={this.state.clicked || !this.props.image ? {border: 'none'} : null} src={this.props.image}></img>
            : <div className='intro-text-div'>
                {this.props.image.map((string, i) => {
                  return <p key={i} className='intro-text'>{string}</p>
                })}
              </div>  
          }
          {this.state.clicked ? <TechOverlay title={this.props.title} tech={this.props.tech} /> : null}
        </div>
        <div className="footer">
          <div className="month">
            {this.props.month}
          </div>
          <div className="year">
            {this.props.year}
          </div>
        </div>
      </div>
    )
  }
};

export default PortfolioCurtain
