import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './index.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

function Footer({navs}) {
  let nowYear = (new Date()).getFullYear();
  // click go to top
  let navList = navs.map((item, index) => {
    return <li key={index}><Link to={item}>{item.toUpperCase()}</Link></li>;
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
          <p>Create with <em>♥</em> by <a target="_blank" href="http://ahbing.me">ahbing</a></p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  navs: PropTypes.array.isRequired,
};

export default Footer;
