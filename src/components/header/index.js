import React, {PropTypes} from 'react';
import styles from './index.scss';
import classNames from 'classNames/bind';

import {Link} from 'react-router';

const cx = classNames.bind(styles);

function Header({navs, curTab}) {
  let classNameForHeader = cx({
    header: true,
  });
  let classNameForLogo = cx({
    logo: true,
  });
  let classNameForList = cx({
    nav: true,
  });

  let navList = navs.map((item, index) => {
    let classNameForCurTab = cx({
      curTab: curTab === item,
    });
    return <li key={index}><Link className={classNameForCurTab} to={item}>{item.toUpperCase()}</Link></li>;
  });
  return (
    <header className={classNameForHeader}>
      {/* logo */}
      <div className={classNameForLogo}>
        <Link to="/"><img src="http://www.betahouse.us/dist/imgs/logo.png"/></Link>
      </div>
      {/* navlist */}
      <nav className={classNameForList}>
        <ul>
          {navList}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  navs: PropTypes.array.isRequired,
  curTab: PropTypes.string.isRequired,
};
export default Header;
