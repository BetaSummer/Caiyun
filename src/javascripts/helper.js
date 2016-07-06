
export function getWindowScrollTop() {
  // older versions of Internet Explorer (< 9) do not support
  const supportPageOffset = window.pageXOffset !== undefined;
  // document.body.scrollTop vs document.documentElement.scrollTop
  // https://miketaylr.com/posts/2014/11/document-body-scrolltop.html
  return supportPageOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}
/*
* animation 动画函数
* @param {element} 元素
* @param {string} 属性
* @param {number} 起点
* @param {number} 结束点
* @param {string} 单位
* @param {number} 动画时长
*/

export function animation(el, style, from, to = 0, unit, time = 1200, prop) {
  if (!el) return;
  const start = Date.now();
  const timer = setInterval(() => {
    const step = Math.min(1, (Date.now() - start) / time);
    if (prop) {
      el[style] = (from + (to - from) * step) + unit;
    } else {
      el.style[style] = (from + (to - from) * step) + unit;
    }
    if (step === 1) {
      clearInterval(timer);
    }
  }, 25);
  el.style[style] = from + unit;
}

export function pageScrollTopAnimate(to, time) {
  const element = document.body;
  animation(element, 'scrollTop', getWindowScrollTop(), to, '', time, true);
}
