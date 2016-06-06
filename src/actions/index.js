import ActionTypes from '../constants';
// console.log('all ActionTypes', ActionTypes);
export function selectUser(userId) {
  return {
    type: ActionTypes.REQUEST_USER,
    userId,
  };
}

export function receviceUser(json) {
  return {
    type: ActionTypes.RECEIVE_USER,
    user: json,
  };
}
