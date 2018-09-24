import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_INIT_GAME_SUCCESS: (s, a) => ({
    ...s,
    gameData: { ...s.gameData, ...a.payload }
  }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload })
};

const initialState = {
  loggedIn: false,
  loading: true,
  gameData: {
    name: '',
    email: '',
    username: '',
    question: {
      level: null,
      question: '',
      addinfo: ''
    }
  }
};

export default reducer(initialState, actionHandlers);
