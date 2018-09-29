import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_STATS_SUCCESS: (s, a) => ({ ...s, ...a.payload }),
  CLEAR_STATS: () => ({ ...initialState })
};

const initialState = {
  totalPlayers: null,
  leading: null,
  onPar: null,
  trailing: null,
  answerAttempts: null,
  highestLevelBreached: null
};

export default reducer(initialState, actionHandlers);
