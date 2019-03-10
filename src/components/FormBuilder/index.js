import React from 'react';
import { arrayOf, func } from 'prop-types';
import { formBuilderNodeType, nodeIdType } from '../../types';
import { FormBuilderNode } from '../../container';

export const FormBuilder = ({ rootNodesList, nodes, addNode }) => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        {rootNodesList.map(nodeId => {
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
  </div>
);

FormBuilder.propTypes = {
  rootNodesList: arrayOf(nodeIdType),
  nodes: arrayOf(formBuilderNodeType),
  addNode: func
};
