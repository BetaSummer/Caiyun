import React from 'react';

import ImageContainer from '../../containers/image';

import styles from './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <section className={styles.section1}>
          <ImageContainer />
          <h1 className={styles.indexTitle}>Hello darkness my old friend</h1>
        </section>
        <section className={styles.introBox}>
          <a href="http://ahbing.me" className={styles.introItem}>
            <ImageContainer/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>hello world</h1>
              </div>
            </div>
          </a>
          <a href="http://ahbing.me" className={styles.introItem}>
            <ImageContainer/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>hello world</h1>
              </div>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Index;
