import * as service from '../../dataService';

export const DATA_LOAD_START = 'DATA_LOAD_START';
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
export const DATA_LOAD_ERROR = 'DATA_LOAD_ERROR';

export const loadTemplate = (templateSlug) => (dispatch) => {
  dispatch({ type: DATA_LOAD_START });
  service.loadTemplate(templateSlug)
    .then(data => {
      // Transform array of nodes to object of nodes
      data.nodes = data.nodes.reduce((nodes, node) => {
        nodes[node.id] = node;
        return nodes;
      }, {});
      dispatch({type: DATA_LOAD_SUCCESS, payload: data });
    })
    .catch(err => dispatch({type: DATA_LOAD_ERROR, payload: { err }}));
};
