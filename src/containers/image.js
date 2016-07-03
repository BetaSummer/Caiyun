// container for Image component
import React from 'react';
import Image from '../components/image/';

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onWindowScroll = this._onWindowScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onWindowScroll, false);
    // dispatch action to get data
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onWindowScroll, false);
  }

  _onWindowScroll() {
    // 懒加载图片
  }

  render() {
    // get props
    // let imgSrc = 'http://tva3.sinaimg.cn/crop.39.0.1085.1085.180/0068u9YVgw1esnarv75jgj30wu0u87d9.jpg';
    let imgSrc = require('../assets/images/sea-clouds-cloudy-flowers-landscape.jpeg');
    return (
      <div>
        <Image imgSrc={imgSrc}/>
      </div>
    );
  }
}

export default ImageContainer;
