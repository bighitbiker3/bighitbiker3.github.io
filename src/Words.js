import React, { Component } from 'react';
import cx from 'classnames'
import PlayerWrapper from './Music/PlayerWrapper';


class Words extends Component {
  render() {
    const { toggleWords, wordsOpen, teaseWords } = this.props;
    return (
      <div
        className={cx('words-wrapper ', wordsOpen && 'words-open', teaseWords && !wordsOpen && 'words-tease')}
      >
        <div onClick={toggleWords} className='words-title' data-text='Words'>idk</div>
        <PlayerWrapper />
      </div>
    );
  }
}

export default Words;