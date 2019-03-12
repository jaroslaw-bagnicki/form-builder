import {
  DATA_LOAD_START,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_ERROR,
  DATA_SAVE_START,
  DATA_SAVE_SUCCESS,
  DATA_SAVE_ERROR
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
  isChanged: false,
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
        error: null,
        isChanged: false
      };
    }
    case DATA_LOAD_ERROR:
      console.log(action.payload.err);
      return {
        ...state,
        isLoading: false,
        error: 'Data load failed.'
      };

      case DATA_SAVE_START:
      return state;

    case DATA_SAVE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: null,
        isChanged: false
      };
    }
    case DATA_SAVE_ERROR:
      console.log(action.payload.err);
      return {
        ...state,
        error: 'Data save failed.'
      };
      
    case ADD_ROOT_NODE:
      return {
        ...state,
        nodes: {
          ...state.nodes, 
          [state.nextId]: emptyNode(state.nextId) 
        },
        rootNodes: state.rootNodes.concat(state.nextId),
        nextId: state.nextId + 1,
        isChanged: true
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
        nextId: state.nextId + 1,
        isChanged: true
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
        },
        isChanged: true
      };
    }

    case DELETE_NODES: {
      const { ids, parent } = action.payload;
      const nodes = {...state.nodes};
      let rootNodes = state.rootNodes;
      ids.forEach(key => delete nodes[key]);
      if (parent === 0) { rootNodes = state.rootNodes.filter(id => id !== ids[0]);
      } else {
        nodes[parent].subnodes = nodes[parent].subnodes.filter(id => id !== ids[0]);
      }
      return {
        ...state,
        nodes,
        rootNodes,
        isChanged: true
      };
    }

    default:
      return state;
  }
};
