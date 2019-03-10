const initState = {
  isLoading: false,
  error: null,
  inputs: [],
  rootInputs: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_START':
      return {
        ...state,
        isLoading: true
      };

    case 'DATA_LOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null
      };
    
    case 'DATA_LOAD_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Loading data faild.'
      };

    default:
      return state;
  }
};
