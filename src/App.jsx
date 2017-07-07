
import React from 'react'
import ReactDOM from 'react-dom'
import CurtainList from './CurtainList'
import Header from './Header';
import Words from './Words';
import Portfolio from './Curtains/Portfolio'
import portfolioArray from './lib/portfolio';
import Home from './Curtains/Home'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      vrMode: true,
      wordsOpen: false,
      windowWidth: null,
      teaseWords: false
    }
    this.toggleWords = this.toggleWords.bind(this);
    this.teaseWords = this.teaseWords.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  componentDidMount() {
    this.setState({windowWidth: window.outerWidth})
    document.addEventListener('resize', () => {
      this.setState({windowWidth: window.outerWidth})
    })
  }

  teaseWords() {
    this.setState((prev) => ({ teaseWords: !prev.teaseWords }))
  }

  toggleWords() {
    this.setState((prev) => ({ wordsOpen: !prev.wordsOpen }))
  }

  renderPortfolio() {
    return portfolioArray.map((obj) => {
      return (
        <Portfolio 
          image={obj.image}
          title={obj.title}
          month={obj.month}
          year={obj.year}
          tech={obj.tech}
        />
      )
    })
  }

  normalMode (){
    return (
      <div>
        <Header 
          toggleWords={this.toggleWords}
          teaseWords={this.teaseWords}
        />
        <Words
          wordsOpen={this.state.wordsOpen}
          toggleWords={this.toggleWords}
          teaseWords={this.state.teaseWords}
        />
        <div >
          
        </div>
        <CurtainList>
          <Home />
          {this.renderPortfolio()}
        </CurtainList>
      </div>
    )
  }

  render () {

    return (
      <div>
        {this.normalMode()}
      </div>
    )
  }
};

export default App;
