import {ISLOGIN} from './action/ActionType';

const initialState = {
  isLogin: {
    isLoader: false,
  },
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ISLOGIN:
      console.log('hiiii', payload);
      state.isLogin = payload;
      return {...state, isLogin: state.isLogin};
    default:
      return state;
  }
};

export default rootReducer;
