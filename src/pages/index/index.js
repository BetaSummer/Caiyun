import React from 'react';

import Image from '../../components/image/';

import styles from './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const indexTitle = document.querySelector(`.${styles.indexTitle}`);
    const textLen = indexTitle.textContent.length;
    const textStyle = indexTitle.style;
    textStyle.width = textLen + 'ch';
    textStyle.animationTimingFunction = 'steps(' + textLen + '),steps(1)';
  }
  render() {
    const indexTitle = ['hi~ betahouse, happy birthday!', 'yanshu'];
    return (
      <div className={styles.wrapper}>
        <section className={styles.section1}>
          <h1 className={styles.indexTitle}>{indexTitle[0]}</h1>
        </section>
        <section className={styles.introBox}>
          <a href="http://google.com" className={styles.introItem}>
            <Image imgSrc="home_3.jpg"/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>beta</h1>
                <p>谢谢你来过我的青春</p>
              </div>
            </div>
          </a>
          <a href="http://google.com" className={styles.introItem}>
            <Image imgSrc="home_1.jpg"/>
            <div className={styles.intro}>
              <div className={styles.content}>
                <h1>house</h1>
                <p>一起走过 5 个春夏秋冬</p>
              </div>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Index;
