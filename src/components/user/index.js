import React, {PropTypes} from 'react';
import styles from './index.scss';
import Image from '../image/';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

function User({user}) {
  let classNameForUser = cx({
    user: true,
  });
  let classNameForUserInfo = cx({
    info: true,
  });
  let classNameForUserInfoDetail = cx({
    infoDetail: true,
  });
  let linkList = Object.keys(user).filter((key) => {
    return typeof user[key] === 'string' && user[key].indexOf('http') === 0;
  }).map((key, index) => {
    const svgSrc = `/src/assets/svgs/${key}.svg`;
    return <li key={index}><a href={user[key]}><img src={svgSrc}/></a></li>;
  });
  return (
    <div className={classNameForUser}>
      <Image imgSrc = {user.avator}/>
      <div className={classNameForUserInfo}>
        <h1>{user.name}</h1>
        <h2>{user.motto}</h2>
        <div className={classNameForUserInfoDetail}>
          <ul>
            {linkList}
          </ul>
          <div>
            <p>{user.describe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
