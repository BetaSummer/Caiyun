import React from 'react';
import classNames from 'classNames/bind';
import {Link} from 'react-router';
import styles from './index.scss';

const cx = classNames.bind(styles);

import User from '../../components/user';
class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = {
      name: 'ahbing',
      imgSrc: imgSrc,
      motto: 'hello world',
    };
    const imgSrc = 'http://tva3.sinaimg.cn/crop.39.0.1085.1085.180/0068u9YVgw1esnarv75jgj30wu0u87d9.jpg';

    let classNameForPerson = cx({
      // hidden: true,
      person: true,
    });
    return (
      <div className={classNameForPerson}>
        <div className={styles.closeBtn}>
          <Link to="/team">&times;</Link>
        </div>
        <User imgSrc = {imgSrc} user = {user}/>
      </div>
    );
  }
}

export default Person;
