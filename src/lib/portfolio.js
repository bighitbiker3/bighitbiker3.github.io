import thatsHot from '../images/thatsHotFinal.png'
import cryptoPass from '../images/cryptoPassFinal.png'
import mesh from '../images/meshFinal.png'
import queueThat from '../images/queueThatFinal.png'

export default [
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
  }
]