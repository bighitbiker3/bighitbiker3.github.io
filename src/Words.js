import React, { Component } from 'react';
import cx from 'classnames'


class Words extends Component {
  render() {
    const { toggleWords, wordsOpen, teaseWords } = this.props;
    return (
      <div
        onClick={toggleWords}
        className={cx('words-wrapper ', wordsOpen && 'words-open', teaseWords && !wordsOpen && 'words-tease')}
      >
        <div className='words-title' data-text='Words'>Idk</div>
        <h1><a>Music</a></h1>
      </div>
    );
  }
}

export default Words;