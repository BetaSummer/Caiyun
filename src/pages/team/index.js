import React from 'react';
import styles from './index.scss';
import classNames from 'classNames/bind';

import Image from '../../components/image';
import User from '../../components/user';
const cx = classNames.bind(styles);

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNameForTeam = cx({
      team: true,
    });
    let classNameForItem = cx({
      item: true,
    });
    const imgSrc = 'http://tva3.sinaimg.cn/crop.39.0.1085.1085.180/0068u9YVgw1esnarv75jgj30wu0u87d9.jpg';
    const user = {
      name: 'ahbing',
      imgSrc: imgSrc,
      motto: 'hello world',
    };
    return (
      <div className={classNameForTeam}>
        <h1>TEAM</h1>
        <p>We reveal our inner heroes every day when creating interesting things</p>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>m</span>
          </div>
        </div>
        <div className={styles.fixed_intro} >
          <User user={user}/>
        </div>
      </div>
    );
  }
}

export default Team;
