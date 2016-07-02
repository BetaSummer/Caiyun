import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './index.scss';
import classNames from 'classNames/bind';

import Image from '../../components/image';
const cx = classNames.bind(styles);

class Team extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let classNameForTeam = cx({
      team: true,
    });
    let classNameForItem = cx({
      item: true,
    });
    const imgSrc = 'http://tva3.sinaimg.cn/crop.39.0.1085.1085.180/0068u9YVgw1esnarv75jgj30wu0u87d9.jpg';
    return (
      <div className={classNameForTeam}>
        <h1>TEAM</h1>
        <p>We reveal our inner heroes every day when creating interesting things</p>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <Link to="/team/1"><div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div></Link>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <Link to="/team/2"><div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div></Link>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <Link to="/team/3"><div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div></Link>
        </div>
        <div className={classNameForItem}>
          <Image imgSrc={imgSrc}/>
          <Link to="/team/3"><div className={styles.intro}>
            <h2>ahbing</h2>
            <p>Front-End Developer</p>
            <span>more</span>
          </div></Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Team;
