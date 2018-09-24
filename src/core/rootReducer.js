import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { snackbarReducer } from 'Src/modules/Snackbar';
import { reducer as loginFormReducer } from 'redux-form';

export default combineReducers({
  form: loginFormReducer,
  common: appReducer,
  snackbar: snackbarReducer
});
