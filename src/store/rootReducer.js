import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router/immutable';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer
  });
}

// const rootReducer = (state, action) => {
//   return appReducers(state, action);
// };
