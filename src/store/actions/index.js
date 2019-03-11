import * as service from '../../dataService';

export const addRootNode = (templateId) => (dispatch) => {
  service.addRootNode(templateId)
    .then(id => {
      dispatch({type: 'ADD_NODE_SUCCESS', payload: { id }});
      dispatch(reloadNodes(templateId));
    })
    .catch(err => dispatch({type: 'ADD_NODE_ERROR', payload: { err }}));
};

export const addSubNode = (id) => (dispatch) => {
  console.log('action addSubNode()', id);
};

export const updateNode = (diff) => (dispatch) => {
  console.log('action updateNode()', diff);
};

export const deleteNode = (id) => (dispatch) => {
  console.log('action addSubnode()');
};

export const loadNodes = (templateId) => (dispatch) => {
  dispatch({type: 'DATA_LOAD_START'});
  service.loadData(templateId)
    .then(data => dispatch({type: 'DATA_LOAD_SUCCESS', payload: {...data}}))
    .catch(err => dispatch({type: 'DATA_LOAD_ERROR', payload: { err }}));
};

export const reloadNodes = (templateId) => (dispatch) => {
  service.loadData(templateId)
    .then(data => dispatch({type: 'DATA_LOAD_SUCCESS', payload: {...data}}))
    .catch(err => dispatch({type: 'DATA_LOAD_ERROR', payload: { err }}));
};
