const initState = {
  isLoading: false,
  error: null,
  template: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_START':
      return {
        ...state,
        isLoading: true
      };

    case 'DATA_LOAD_SUCCESS': {
      return {
        ...state,
        template: action.payload,
        isLoading: false,
        error: null
      };
    }
    case 'DATA_LOAD_ERROR':
      console.log(action.payload.err);
      return {
        ...state,
        isLoading: false,
        error: 'Data load failed.'
      };
      
    case 'ADD_NODE_SUCCESS': 
      return state;
    
    case 'ADD_NODE_ERROR':
      console.log(action.payload.err);
      return {
        ...state,
        error: 'Adding node faild.'
      };

    default:
      return state;
  }
};
