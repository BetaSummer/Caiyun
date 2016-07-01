import ActionTypes from '../constants';

const INITIAL_STATE = {
  curTab: 'home',
  headerTabs: [
    {tabName: 'about', isLink: false},
    {tabName: 'team', isLink: false},
    {tabName: 'blog', isLink: true, href: 'http://zhizhi.betahouse.us'},
  ],
  footerTabs: [
    {tabName: 'home', isLink: false},
    {tabName: 'about', isLink: false},
    {tabName: 'team', isLink: false},
    {tabName: 'blog', isLink: true, href: 'http://zhizhi.betahouse.us'},
    {tabName: 'github', isLink: true, href: 'https://github.com/BetaSummer'},
    {tabName: 'concat', isLink: true, href: 'mailto:givemearainbowlife@gmail.com'},
  ],
};

function tab(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionTypes.SELECT_TAB:
    return Object.assign({}, state, {
      curTab: action.curTab,
    });
  default:
    return state;
  }
}

export default tab;
