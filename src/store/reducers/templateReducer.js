import {
  DATA_LOAD_START,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_ERROR
} from '../actions/dbActions';

import {
  ADD_ROOT_NODE,
  ADD_SUB_NODE,
  UPDATE_NODE,
  DELETE_NODES
} from '../actions/nodeActions';

import { emptyNode, defaultConditon } from '../../helpers';

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
      return {
        ...state,
        nodes: {
          ...state.nodes, 
          [state.nextId]: emptyNode(state.nextId) 
        },
        rootNodes: state.rootNodes.concat(state.nextId),
        nextId: state.nextId + 1
      };
  
    case ADD_SUB_NODE: {
      const { id, inputType } = action.payload;
      return {
        ...state,
        nodes: {
          ...state.nodes, 
          [state.nextId]: emptyNode(state.nextId, defaultConditon[inputType]),
          [id]: {
            ...state.nodes[id],
            subnodes: state.nodes[id].subnodes.concat(state.nextId)
          }
        },
        nextId: state.nextId + 1
      };
    }

    case UPDATE_NODE: {
      const { id, diff } = action.payload;
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [id]: {
            ...state.nodes[id],
            ...diff
          }
        }
      };
    }

    case DELETE_NODES: {
      console.log(DELETE_NODES, action.payload.ids);
      const copy = {...state.nodes};
      action.payload.ids.forEach(key => delete copy[key]);
      console.log(state.nodes, copy);
      return {
        ...state,
        nodes: copy
      };
    }

    default:
      return state;
  }
};
