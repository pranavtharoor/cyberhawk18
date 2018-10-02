import reducer from 'Src/utils/reducer';

const actionHandlers = {
  ALLOW_ANSWER_SUBMIT: (s, a) => ({ ...s, allowAnswerSubmit: a.payload })
};

const initialState = {
  allowAnswerSubmit: true
};

export default reducer(initialState, actionHandlers);
