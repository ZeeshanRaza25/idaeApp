const initialState = {
  email: '123',
  password: '235',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_INPUT_CHANGE':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
}
