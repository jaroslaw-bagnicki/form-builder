import React from 'react';
import { arrayOf, number } from 'prop-types';
import { formBuilderNodeType } from '../../types';
import { FormBuilderNode } from '../';

export const FormBuilder = ({ rootNodesList, nodes }) => (
  <div className="container">
    {rootNodesList.map(nodeId => (<FormBuilderNode key={nodeId} id={nodeId} nodes={nodes} />))}
  </div>
);

FormBuilder.propTypes = {
  rootNodesList: arrayOf(number.isRequired),
  nodes: arrayOf(formBuilderNodeType)
};
