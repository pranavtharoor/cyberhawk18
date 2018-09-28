import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_HINTS_SUCCESS: (s, a) => ({ ...s, hints: a.payload }),
  CLEAR_HINTS: () => ({ ...initialState })
};

const initialState = {
  hints: []
};

export default reducer(initialState, actionHandlers);
