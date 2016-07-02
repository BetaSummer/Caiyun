import React, {PropTypes} from 'react';
import styles from './index.scss';
import classNames from 'classNames/bind';

import {Link} from 'react-router';

const cx = classNames.bind(styles);

function Header({tabs, curTab}) {
  let classNameForHeader = cx({
    header: true,
    hide: true,
  });
  let classNameForLogo = cx({
    logo: true,
  });
  let classNameForList = cx({
    nav: true,
  });

  let navList = tabs.map((item, index) => {
    const tabName = item.tabName;
    let classNameForCurTab = cx({
      curTab: curTab === tabName,
    });
    if (item.isLink) {
      return <li key={index}><a className={classNameForCurTab} href={item.href}>{tabName.toUpperCase()}</a></li>;
    }
    return <li key={index}><Link className={classNameForCurTab} to={tabName}>{tabName.toUpperCase()}</Link></li>;
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
  tabs: PropTypes.array.isRequired,
  curTab: PropTypes.string.isRequired,
};
export default Header;
