import React from 'react';
import { bool, func, arrayOf } from 'prop-types';
import { formBuilderNodeType, nodeIdType } from '../../types';
import { FormBuilderNode } from '../../container';

export const FormBuilder = ({ isLoading, rootNodes, nodes, addNode }) => {
  return isLoading ? <i className="fas fa-spinner fa-spin fa-4x grey-text loader"></i> :
    <div className="container">
      <div className="row">
        <div className="col s12">
          {rootNodes.map(nodeId => {
            const node = nodes.find(node => node.id === nodeId);
            return (
              <FormBuilderNode key={node.id} node={node} />
            );
          })}
          <div className="col s12">
            <button className="btn-small waves-effect grey" 
              onClick={addNode}
            >Add Input</button>
          </div>
        </div>
      </div>
    </div>;
};

FormBuilder.propTypes = {
  isLoading: bool.isRequired,
  rootNodes: arrayOf(nodeIdType),
  nodes: arrayOf(formBuilderNodeType),
  addNode: func
};
