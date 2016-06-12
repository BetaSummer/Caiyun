import React, {PropTypes} from 'react';
import styles from './index.scss';

import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

function User({user}) {
  let classNameForUser = cx({});

  return (
    <div className={classNameForUser}>
      {user.name}
      {user.motto}
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
