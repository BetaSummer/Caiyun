import ActionTypes from '../constants';

export function selectUser(userId) {
  return {
    type: ActionTypes.SELECT_USER,
    userId,
  };
}

export function receviceUser(json) {
  return {
    type: ActionTypes.RECEIVE_USER,
    user: json,
  };
}

export function selectTab(tab) {
  return {
    type: ActionTypes.SELECT_TAB,
    curTab: tab,
  };
}
