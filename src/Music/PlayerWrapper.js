import React, { Component } from 'react';
import frequencyAnalyser from '../lib/frequencyAnalyser';

class PlayerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analyser: null,
      lowFreq: 0,
      highFreq: 0,
    };
    this.getAnalyserData = this.getAnalyserData.bind(this);
    this.toggleTrack = this.toggleTrack.bind(this);
  }
  componentDidMount() {
    const { analyser, frequencyData, frequencySpread } = frequencyAnalyser(this.audioRef);
    this.audioRef.currentTime = 0
    this.analyser = analyser;
    this.frequencyData = frequencyData;
    this.frequencySpread = frequencySpread;
    this.getAnalyserData();
  }

  getAnalyserData() {
    requestAnimationFrame(this.getAnalyserData);
    this.analyser.getByteFrequencyData(this.frequencyData);
    if(this.audioRef.paused) {
      this.setState({
        lowFreq: 0,
        highFreq: 0
      })  
    } else {
      this.setState({
        lowFreq: this.frequencyData[0] + 50,
        highFreq: this.frequencyData[Math.round(10000 / this.frequencySpread)] + 75
      })
    }
  }

  toggleTrack() {
    if (this.audioRef.paused) return this.audioRef.play()
    return this.audioRef.pause()
  }
  
  render() {

    return (
      <div style={{ ywidth: '100%', height: '20%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div />
          <h1 onClick={this.toggleTrack} style={{ cursor: 'pointer', fontSize: 80, color: `rgb(0, ${this.state.highFreq}, ${this.state.lowFreq})` }}>como</h1>
          <audio src='/audio/como.mp3' ref ={(el) => (this.audioRef = el)}></audio>
      </div>
    );
  }
}

export default PlayerWrapper;
