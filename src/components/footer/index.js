import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './index.scss';
import classNames from 'classNames/bind';
const cx = classNames.bind(styles);
import {pageScrollTopAnimate} from '../../javascripts/helper';
class Footer extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {tabs} = this.props;
    const nowYear = (new Date()).getFullYear();
    // click go to top
    const navList = tabs.map((item, index) => {
      const tabName = item.tabName;
      if (item.isLink) {
        return <li key={index}><a target="_blank" href={item.href}>{tabName.toUpperCase()}</a></li>;
      }
      return <li key={index}><Link to={tabName} onClick={() => pageScrollTopAnimate(0, 300)}>{tabName.toUpperCase()}</Link></li>;
    });
    let classNameForFooter = cx({
      footer: true,
    });
    let classNameForLeft = cx({
      left: true,
    });
    let classNameForRight = cx({
      right: true,
    });
    return (
      <footer className={classNameForFooter}>
        <div className={classNameForLeft}>
          <img src="http://www.betahouse.us/dist/imgs/logo.png"/>
        </div>
        <div className={classNameForRight}>
          <ul>
            {navList}
          </ul>
          <div>
            <p>Copyright &copy; 2012-{nowYear} betahouse.us</p>
            <p>Create with <em>♥</em> by <a target="_blank" href="http://weibo.com/u/5622195893/">ahbing</a> • <a target="_blank" href="https://github.com/BetaSummer/Caiyun">彩云</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
