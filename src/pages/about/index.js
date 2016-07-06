import React from 'react';
import styles from './index.scss';

import Image from '../../components/image/';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.about}>
        <h1>我们的betahouse</h1>
        <p className={styles.text}>Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend</p>
        <p className={styles.text}>Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend</p>
        <Image imgSrc="sea-clouds-cloudy-flowers-landscape.jpeg"/>
        <p className={styles.text}>Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend Hello darkness my old friend</p>
      </div>
    );
  }
}

export default About;
