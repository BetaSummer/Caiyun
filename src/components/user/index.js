import React, {PropTypes} from 'react';
import styles from './index.scss';
import Image from '../image/';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

function User({imgSrc, user}) {
  let classNameForUser = cx({
    user: true,
  });
  let classNameForUserInfo = cx({
    info: true,
  });
  let classNameForUserInfoDetail = cx({
    infoDetail: true,
  });
  return (
    <div className={classNameForUser}>
      <Image imgSrc = {imgSrc}/>
      <div className={classNameForUserInfo}>
        <h1>{user.name}</h1>
        <h2>{user.motto}</h2>
        <div className={classNameForUserInfoDetail}>
          <ul>
            <li><a href=""><i>1</i></a></li>
            <li><a href=""><i>2</i></a></li>
          </ul>
          <div>
            <p>hello world hello rld hello rld hello world hello wo rld hello rld hello world hello wo rld hello rld hello world hello wo rld hello rld hello world hello world hello world hello rld hello rlrld hellorld hello  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
