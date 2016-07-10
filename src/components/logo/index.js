import React, {PropTypes} from 'react';
import styles from './index.scss';

function Logo({imgSrc}) {
  return (
    <svg className={styles.logo} viewBox="0 0 300 300">
      <image clip-path="url(#logo-mask)" height="100%" width="100%" xlinkHref={imgSrc}></image>
      <rect clip-path="url(#logo-mask)" className={styles.logoRect} height="100%" width="100%" fill="#000000"></rect>
      <clippath id="logo-mask">
        <title>X</title>
        <path data-min-y="0" data-max-y="200" className="path1" d="M958.080 246.88l28.384-28.352c49.984-49.984 49.984-131.104 0-181.088-49.952-49.952-130.944-49.952-180.928 0l-217.312 217.248 181.12 180.992 188.736-188.8z"></path>
        <path data-min-y="0" data-max-y="200" className="path2" d="M896.032 714.912v0.064l-126.624-126.528-180.992 180.896 217.024 217.12c50.080 50.016 131.168 50.016 181.056 0 49.984-49.984 49.984-131.104 0-180.992l-90.464-90.56z"></path>
        <path data-min-y="0" data-max-y="200" className="path3" d="M693.024 512l1.248-1.248-475.712-473.28c-50.016-49.984-131.104-49.984-180.992 0-50.016 49.984-50.016 131.040 0 180.992l293.44 293.536-293.44 293.504c-50.016 49.952-50.016 131.008 0 180.992 49.984 49.984 130.976 49.984 180.992 0l37.472-37.568 438.336-435.68-1.344-1.248z"></path>
      </clippath>
    </svg>
  );
}

Logo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Logo;
