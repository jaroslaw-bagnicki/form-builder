const initState = {
  isLoading: false,
  error: null,
  nodes: [],
  rootNodes: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_START':
      return {
        ...state,
        isLoading: true
      };

    case 'DATA_LOAD_SUCCESS': {
      const { nodes, form } = action.payload;
      return {
        ...state,
        ...form,
        nodes,
        isLoading: false,
        error: null
      };
    }
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
