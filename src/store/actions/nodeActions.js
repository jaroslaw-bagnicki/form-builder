export const ADD_ROOT_NODE = 'ADD_ROOT_NODE';
export const ADD_SUB_NODE = 'ADD_SUB_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';
export const DELETE_NODES = 'DELETE_NODES';

export const addRootNode = () => ({ type: ADD_ROOT_NODE });

export const addSubNode = (id, inputType) => ({
  type: ADD_SUB_NODE,
  payload: { id, inputType }
});

export const updateNode = ( id, diff ) => ({
  type: UPDATE_NODE,
  payload: { id, diff }
});

export const deleteNodes = (ids, parent) => ({
  type: DELETE_NODES,
  payload: { ids, parent }
});
