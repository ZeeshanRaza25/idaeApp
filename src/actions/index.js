const authInputChange = obj => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: obj,
  };
};

export default authInputChange;
