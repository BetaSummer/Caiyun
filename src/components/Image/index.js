import React, {PropTypes} from 'react';
import classNames from 'classNames/bind';

import styles from './index.scss';

const cx = classNames.bind(styles);

class Image extends React.Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this._onWindowScroll = this._onWindowScroll.bind(this);
  }

  componentDidMount() {
    this._onWindowScroll();
    window.addEventListener('scroll', this._onWindowScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onWindowScroll, false);
  }

  _onWindowScroll() {
    const hasScrollTop = window.innerHeight + document.body.scrollTop;
    const curImg = this.refs.lazyLoadImg;
    if (curImg.getAttribute('src')) {
      return false;
    }
    if (curImg.offsetParent && curImg.offsetParent.offsetTop < hasScrollTop) {
      const dataSrc = curImg.getAttribute('data-src');
      curImg.src = dataSrc;
    }
    return true;
  }
  render() {
    const {imgSrc} = this.props;
    let classNameForImage = cx({
      base: true,
    });
    return (
      <img ref="lazyLoadImg" data-src={imgSrc} className={classNameForImage}/>
    );
  }
}

export default Image;
