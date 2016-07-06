import React from 'react';

import Image from '../../components/image/';

import styles from './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let indexTitle = 'Hello darkness my old friend';
    return (
      <div className={styles.wrapper}>
        <section className={styles.section1}>
          <h1 className={styles.indexTitle}>{indexTitle}</h1>
        </section>
        <section className={styles.introBox}>
          <a href="http://google.com" className={styles.introItem}>
            <Image imgSrc="sea-clouds-cloudy-flowers-landscape.jpeg"/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>hello world</h1>
                <p>say something</p>
              </div>
            </div>
          </a>
          <a href="http://google.com" className={styles.introItem}>
            <Image imgSrc="sea-clouds-cloudy-flowers-landscape.jpeg"/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>hello world</h1>
                <p>say something</p>
              </div>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Index;
