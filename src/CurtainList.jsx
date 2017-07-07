import React from 'react'
import $ from 'jquery';

import thatsHot from './images/thatsHotFinal.png'
import cryptoPass from './images/cryptoPassFinal.png'
import mesh from './images/meshFinal.png'
import ptb from './images/ptbFinal.png'
import queueThat from './images/queueThatFinal.png'

const curtains = [
  {
    image: ['Hi 🤗.', 'My name\'s Elliott and I\'m a Javascript developer. I like to make things.', 'My favorite emojis are 😔 and 😴.', 'You can click on things here and other words show up'],
    title: null,
    month: <a href="https://github.com/bighitbiker3" target="_blank"><p>GitHub</p></a>,
    year: <a href="mailto:elliottmcnary@gmail.com?Subject=Sup" target="_top"><p>Contact</p></a>,
    tech: {
      text: [
        'I really like flexxin and finessin\'.',
        'I also love 3D art, food, music, and exercise. I could talk about code and music all day so hmu @elliottmcnary'
      ],
      links: ['']
    }
  },
  {
    image: thatsHot,  
    title: 'That\'s Hot', 
    month: 'September',
    year: '2016',
    tech: {
      text: [
        'That\'s Hot helps find music from smaller artists. It uses an algorithm that analyzes your followers and likes in order to provide suggestions based on your tastes.',
        'Design By Nolan McHugh'
        ],
      links:['No Code Available', 'http://thatshot.audio']
    }
  },
  {
    image: cryptoPass,
    title: 'Crypto Pass',
    month: 'August',
    year: '2016',
    tech: {
      text: 
      ['CryptoPass was a project a team of us built at Fullstack Academy.  It is a desktop and mobile application, along with a chrome extension'],
      links:['https://github.com/alecfriedman3/cryptopass', 'https://cryptopassapp.herokuapp.com']
    }
  },
  {
    image: mesh,
    title: 'Me$h',
    month: 'July',
    year: '2016',
    tech:{
      text: ['Mesh was built over the course of a 3-day hackathon at FSA. It aimed to showcase an alternative advertising model for streaming services. I still think it\'s a fucking amazing idea.'],
      links:['https://github.com/bighitbiker3/mesh', 'https://meshr.herokuapp.com/']
    }
  },
  {
    image: queueThat,
    title: 'QueueThat',
    month: 'November',
    year: '2015',
    tech: {
      text: ['The first app I ever built. Allows you to queue songs on SoundCloud. Can\'t believe they haven\'t implemented this feature yet smdh'],
      links: ['https://github.com/bighitbiker3/queueThat', 'http://queuethat.herokuapp.com']
    }
  },
  {
  image: ['I hope you enjoyed!', 'Lmk if you have any questions by contacting me below'],
  title: 'The End',
  month: null,
  year: null,
  tech: {}
}
]


class CurtainList extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      scroll: 0,
      height: 0,
      tease: false
    }
    this.getPosition = this.getPosition.bind(this)
    this.tease = this.tease.bind(this)
  }

  componentWillMount(){
    var self = this;
    this.setState({height: $(window).height()});
    window.addEventListener('scroll', this.getPosition);
    // setTimeout(() => self.state.scroll === 0 ? self.tease() : null, 6000)
  }

  getPosition(){
    this.setState({scroll: window.scrollY});
  }

  tease(){
    let self = this;
    $('html, body').animate({scrollTop:self.state.height/3}, 'slow');
    $('html, body').animate({scrollTop:0}, 'slow');
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
    // return curtains.map((obj, i) => {
    //   counter--;
    //   return(
    //     <Curtain
    //     transform={this.state.scroll - i * (this.state.height + this.state.height/4)}
    //     classes={obj.className}
    //     key={i}
    //     zIndex={counter}
    //     image={obj.image}
    //     title={obj.title}
    //     month={obj.month}
    //     year={obj.year}
    //     tech={obj.tech}
    //     tease={this.state.tease}
    //     />
    //   )
    // })
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
