import React from 'react'

class TechOverlay extends React.Component{
  renderTextList(){
    return this.props.tech.text.map(item => {
      return item.indexOf('Design By') > -1 ? <p>{item}</p> : <h1>{item}</h1>
    });
  }

  render(){
    return (
      <div className="techOverlay">
      <div className="page-header-overlay">
      </div>
        <div className="techOverlay-text">
          {this.renderTextList()}
        </div>
        <div className="techOverlay-links">
          {this.props.tech.links[0].indexOf('http') > -1 ? <a href={this.props.tech.links[0]}><p>GitHub</p></a> : <a><p>{this.props.tech.links[0]}</p></a>}
          <a href={this.props.tech.links[1]} target="_blank" rel="noopener noreferrer"><p>{this.props.title}</p></a>
        </div>
      </div>
    )
  }
};

export default TechOverlay
