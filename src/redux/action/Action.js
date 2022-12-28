import {ISLOGIN} from './ActionType';

export const setLogin = data => {
  if (data) {
    return {type: ISLOGIN, payload: data};
  }
};
