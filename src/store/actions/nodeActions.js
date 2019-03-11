export const ADD_ROOT_NODE = 'ADD_ROOT_NODE';
export const ADD_SUB_NODE = 'ADD_SUB_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';
export const DELETE_NODE = 'DELETE_NODE';

export const addRootNode = () => ({ type: ADD_ROOT_NODE });

export const addSubNode = (id) => ({
  type: ADD_SUB_NODE,
  payload: { id }
});

export const updateNode = (id, diff) => ({
  type: UPDATE_NODE,
  payload: { id, diff }
});

export const deleteNode = (id) => ({
  type: DELETE_NODE,
  payload: { id }
});
