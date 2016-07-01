import React from 'react';
import styles from './index.scss';

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
        {/* 点击弹出层 compoent */}
        {/* Img Component */}
        {/* Video Component */}
      </div>
    );
  }
}

export default About;
