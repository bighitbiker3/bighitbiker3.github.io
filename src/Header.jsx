const React = require('react');

const Header = ({toggleWords, teaseWords}) => (
  <div className="header">
    <div className="logo-left">
      <div className='glitch' data-text='EL'>
        EL
      </div>
    </div>
    <div className="logo-right" onMouseLeave={teaseWords} onMouseOver={teaseWords} onClick={toggleWords}>
      <div className='glitch' data-text='EL'>
        EL
      </div>
    </div>
  </div>
);

export default Header
