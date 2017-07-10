import React from 'react'

class CurtainList extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      scroll: 0,
      height: 0,
    }
    this.getPosition = this.getPosition.bind(this)
  }

  componentWillMount(){
    this.setState({height: window.innerHeight});
    window.addEventListener('scroll', this.getPosition);
    window.addEventListener('resize', () => {
      this.setState({height: window.innerHeight})
    })
  }

  getPosition(){
    this.setState({scroll: window.scrollY});
  }

  renderList(){
    let counter = 100;
    return React.Children.map(this.props.children, (child, i) => {
      counter--
      let transformYVal = this.state.scroll - i * (this.state.height + this.state.height/4)
      if (transformYVal < 0) transformYVal = 0
      return (
        React.cloneElement(
          child,
          {
            style: {
              zIndex: counter,
              transform: `translateY(-${transformYVal}px)`
            },
            key: i,
            className: 'boo'
          }
        )
      )
    })
  }

  render(){
    return (
      <div className="curtainList">
        {this.renderList()}
      </div>
    )
  }
};

export default CurtainList
