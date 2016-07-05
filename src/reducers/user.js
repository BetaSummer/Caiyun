import ActionTypes from '../constants';

const INITIAL_STATE = {
  isFetching: false,
  currentUser: {},
  team: [
    {
      id: 0,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
    {
      id: 1,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
    {
      id: 2,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
    {
      id: 3,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
    {
      id: 4,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
    {
      id: 5,
      name: 'ahbing',
      avator: '/src/assets/images/sea-clouds-cloudy-flowers-landscape.jpeg',
      homepage: 'http://huangbingbing.com',
      github: 'http://github.com/ahbing',
      describe: '人来人往',
      period: 4,
      profession: '工商管理',
      motto: 'some motto',
      company: 'upyun',
    },
  ],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionTypes.REQUEST_USER:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case ActionTypes.RECEIVE_USER:
    return Object.assign({}, state, {
      isFetching: false,
    });
  case ActionTypes.SELECT_USER:
    return Object.assign({}, state, {
      currentUser: state.team[action.userId],
    });
  default:
    return state;
  }
}

export default user;
