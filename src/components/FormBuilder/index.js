import React from 'react';
import { arrayOf } from 'prop-types';
import { formBuilderNodeType, nodeIdType } from '../../types';
import { FormBuilderNode } from '../';

export const FormBuilder = ({ rootNodesList, nodes }) => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        {rootNodesList.map(nodeId => {
          const node = nodes.find(node => node.id === nodeId);
          return (
            <FormBuilderNode key={node.id} node={node} nodes={nodes} />
          );
        })}
      </div>
    </div>
  </div>
);

FormBuilder.propTypes = {
  rootNodesList: arrayOf(nodeIdType),
  nodes: arrayOf(formBuilderNodeType)
};
