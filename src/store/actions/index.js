import * as service from '../../dataService';

export const addNode = () => (dispatch) => {
  console.log('action addNode()');
};

export const addSubnode = (id) => (dispatch) => {
  console.log('action addNode()', id);
};

export const updateNode = (diff) => (dispatch) => {
  console.log('action updateNode()', diff);
};

export const deleteNode = (id) => (dispatch) => {
  console.log('action addSubnode()');
};

export const loadNodes = () => (dispatch) => {
  console.log('action loadNodes()');
  dispatch({type: 'DATA_LOAD_START'});
  service.loadData(1)
    .then(data => dispatch({type: 'DATA_LOAD_SUCCESS', payload: {...data}}));
};
