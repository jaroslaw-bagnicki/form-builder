import {
  DATA_LOAD_START,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_ERROR

} from '../actions/dbActions';

import {
  ADD_ROOT_NODE,
  ADD_SUB_NODE,
  UPDATE_NODE,
  DELETE_NODE

} from '../actions/nodeActions';

const initState = {
  isLoading: false,
  error: null,
  title: '',
  slug: '',
  rootNodes: [],
  nodes: {},
  nextId: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case DATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };

    case DATA_LOAD_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null
      };
    }
    case DATA_LOAD_ERROR:
      console.log(action.payload.err);
      return {
        ...state,
        isLoading: false,
        error: 'Data load failed.'
      };
      
    case ADD_ROOT_NODE: 
      console.log(ADD_ROOT_NODE);
      return {
        ...state
      };
  
    case ADD_SUB_NODE: 
      console.log(ADD_SUB_NODE);
      return {
        ...state
      };

    case UPDATE_NODE: 
      console.log(UPDATE_NODE);
      return {
        ...state
      };

    case DELETE_NODE: 
      console.log(DELETE_NODE);
      return {
        ...state
      };

    default:
      return state;
  }
};
