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
  }
  componentDidMount() {
    // 拿到需要渲染的组件
    // 但通过 className 会不会拿到很多个，而非当前的这个？
    // 是事件委托呢还是给每个 img 增加事件监听？
    // 事件委托 如何拿到当前在视窗内的 img ？
    // 每生成一个组件这里的代码再执行一遍？ 会不会造成事件的无意义的重复注册？ 性能问题？
    // 判断当前的组件是否在视窗内部 且只在视窗内部
    // 赋值 data-src 值给 src
  }

  render() {
    const {imgSrc} = this.props;
    let classNameForImage = cx({
      base: true,
    });
    return (
      <img data-src={imgSrc} src={imgSrc} className={classNameForImage}/>
    );
  }
}

export default Image;
