import React, {PropTypes} from 'react';
import classNames from 'classNames/bind';

import styles from './index.scss';

const cx = classNames.bind(styles);

function Image({imgSrc}) {
  let classNameForImage = cx({
    base: true,
    show: imgSrc,
  });
  return (
    <img src={imgSrc} className={classNameForImage}/>
  );
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Image;
