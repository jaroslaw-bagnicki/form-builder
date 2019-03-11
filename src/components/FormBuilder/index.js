import React from 'react';
import { func } from 'prop-types';
import { templateType } from '../../types';
import { FormBuilderNode } from '../../container';

export const FormBuilder = ({ template: { isLoading, title, rootNodes, nodes }, addRootNode }) => {
  return isLoading ? <i className="fas fa-spinner fa-spin fa-4x grey-text loader"></i> :
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4>{title}</h4>
          {rootNodes && rootNodes.map(id => <FormBuilderNode key={id} node={nodes[id]} nodes={nodes} />)}
          <div className="col s12">
            <button className="btn-small waves-effect grey" 
              onClick={addRootNode}
            >Add Input</button>
          </div>
        </div>
      </div>
    </div>;
};

FormBuilder.propTypes = {
  template: templateType,
  addRootNode: func
};
