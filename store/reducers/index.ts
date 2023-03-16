import todoReducer from './todoReducer';
import userReducer from './userReducer';

export const rootReducer = {
  todo: todoReducer,
  userAccount: userReducer,
};
