import ActionTypes from '../constants';

const INITIAL_STATE = {
  id: 0,
  name: 'ahbing',
  avator: 'http://tva3.sinaimg.cn/crop.39.0.1085.1085.180/0068u9YVgw1esnarv75jgj30wu0u87d9.jpg',
  homepage: 'http://huangbingbing.com',
  github: 'http://github.com/ahbing',
  describe: '人来人往',
  period: 4,
  profession: '工商管理',
  motto: 'some motto',
  company: 'upyun',
};

function User(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionTypes.REQUEST_USER:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case ActionTypes.RECEIVE_USER:
    return Object.assign({}, state, {
      isFetching: false,
      /* receive data */
    });
  default:
    return state;
  }
}

export {User};
