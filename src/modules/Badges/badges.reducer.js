import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_BADGES_SUCCESS: (s, a) => ({ ...s, badges: a.payload }),
  CLEAR_BADGES: () => ({ ...initialState })
};

const initialState = {
  badges: []
};

export default reducer(initialState, actionHandlers);
