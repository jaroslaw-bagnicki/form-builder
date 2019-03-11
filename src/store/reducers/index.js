const initState = {
  isLoading: false,
  error: null,
  template: null,
  nodes: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_START':
      return {
        ...state,
        isLoading: true
      };

    case 'DATA_LOAD_SUCCESS': {
      const { nodes, template } = action.payload;
      return {
        ...state,
        template,
        nodes,
        isLoading: false,
        error: null
      };
    }
    case 'DATA_LOAD_ERROR':
      console.log(action.payload.err);
      return {
        ...state,
        isLoading: false,
        error: 'Loading data faild.'
      };

    default:
      return state;
  }
};
