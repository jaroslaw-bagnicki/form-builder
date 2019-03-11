import * as service from '../../dataService';

// export const addRootNode = (templateId) => (dispatch) => {
//   service.addRootNode(templateId)
//     .then(() => {
//       dispatch({type: 'ADD_NODE_SUCCESS'});
//       dispatch(reloadNodes(templateId));
//     })
//     .catch(err => dispatch({type: 'ADD_NODE_ERROR', payload: { err }}));
// };

// export const addSubNode = (templateId, nodeId) => (dispatch) => {
//   service.addSubNode(nodeId)
//     .then(() => {
//       dispatch({type: 'ADD_NODE_SUCCESS'});
//       dispatch(reloadNodes(templateId));
//     })
//     .catch(err => dispatch({type: 'ADD_NODE_ERROR', payload: { err }}));
// };

// export const updateNode = (diff) => (dispatch) => {
//   console.log('action updateNode()', diff);
// };

// export const deleteNode = (id) => (dispatch) => {
//   console.log('action addSubnode()');
// };

export const loadTemplate = (templateSlug) => (dispatch) => {
  dispatch({type: 'DATA_LOAD_START'});
  service.loadTemplate(templateSlug)
    .then(data => {
      // Transform array of nodes to object of nodes
      data.nodes = data.nodes.reduce((nodes, node) => {
        nodes[node.id] = node;
        return nodes;
      }, {});
      dispatch({type: 'DATA_LOAD_SUCCESS', payload: data });
    })
    .catch(err => dispatch({type: 'DATA_LOAD_ERROR', payload: { err }}));
};

// export const reloadNodes = (templateId) => (dispatch) => {
//   service.loadData(templateId)
//     .then(data => dispatch({type: 'DATA_LOAD_SUCCESS', payload: {...data}}))
//     .catch(err => dispatch({type: 'DATA_LOAD_ERROR', payload: { err }}));
// };
