import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import styles from './index.scss';
import classNames from 'classNames/bind';

import {Link} from 'react-router';
const cx = classNames.bind(styles);

class Header extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    curTab: PropTypes.string,
    isShowMobileMenu: PropTypes.bool,
    toggleMobileMenu: PropTypes.func,
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {tabs, curTab, isShowMobileMenu, toggleMobileMenu} = this.props;
    let classNameForHeader = cx({
      header: true,
    });
    let classNameForLogo = cx({
      logo: true,
    });
    let classNameForList = cx({
      nav: true,
      mShow: isShowMobileMenu,
    });
    let navList = tabs.map((item, index) => {
      const tabName = item.tabName;
      let classNameForCurTab = cx({
        isCurTab: curTab === tabName,
      });
      if (item.isLink) {
        return <li key={index}><a className={classNameForCurTab} href={item.href}>{tabName.toUpperCase()}</a></li>;
      }
      return <li key={index}><Link onTouchEnd={() => { toggleMobileMenu(); }} className={classNameForCurTab} to={tabName}>{tabName.toUpperCase()}</Link></li>;
    });
    return (
      <header className={classNameForHeader}>
        <div className={classNameForLogo}>
          <Link to="/"><img src={require('./../../assets/images/logo.png')}/></Link>
        </div>
        <div className={styles.menuBtn} onTouchEnd={() => { toggleMobileMenu(); }}>
          <img src={require('./../../assets/svgs/more.svg')} />
        </div>
        <nav className={classNameForList}>
          <ul>
            {navList}
          </ul>
        </nav>
      </header>
    );
  }
}
function mapStateToProps(state) {
  return {...state};
}
export default connect(mapStateToProps)(Header);
