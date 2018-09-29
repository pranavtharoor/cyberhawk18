import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { snackbarReducer } from 'Src/modules/Snackbar';
import { hintsReducer } from 'Src/modules/Hints';
import { triesReducer } from 'Src/modules/Tries';
import { statsReducer } from 'Src/modules/Stats';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  common: appReducer,
  snackbar: snackbarReducer,
  hints: hintsReducer,
  tries: triesReducer,
  stats: statsReducer
});
