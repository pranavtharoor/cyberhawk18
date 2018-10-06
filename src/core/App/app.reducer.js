import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_INIT_GAME_SUCCESS: (s, a) => ({
    ...s,
    gameData: { ...s.gameData, ...a.payload }
  }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload }),
  SET_AVATAR: (s, a) => ({
    ...s,
    gameData: { ...s.gameData, avatar: a.payload }
  }),
  SET_RULES: (s, a) => ({ ...s, rulesOpen: a.payload }),
  CLOSE_END_MESSAGE: s => ({ ...s, gameEndMessgeOpen: false })
};

const initialState = {
  rulesOpen: false,
  loggedIn: false,
  loading: true,
  gameEndMessgeOpen: true,
  gameData: {
    avatar: 'identicon',
    email: '',
    username: '',
    question: {
      level: 0,
      question: '',
      addinfo: ''
    }
  }
};

export default reducer(initialState, actionHandlers);
