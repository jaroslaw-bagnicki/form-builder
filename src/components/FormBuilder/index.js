import React from 'react';
import { func } from 'prop-types';
import { templateType } from '../../types';
import { FormBuilderNode } from '../../container';

export const FormBuilder = ({ template: { isLoading, isChanged, title, rootNodes, nodes }, addRootNode, loadTemplate, saveTemplate }) => {
  return isLoading ? <i className="fas fa-spinner fa-spin fa-4x grey-text loader"></i> :
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4>
            {title}
            <span className="actions right">
              <button 
                  className="btn waves-effect blue lighten-2" 
                  onClick={() => loadTemplate('sample-template')}>
                Load sample template</button> <button 
                className="btn waves-effect green lighten-1" 
                onClick={saveTemplate}
                disabled={!isChanged}> 
              Save</button>
            </span> 
          </h4>
          {rootNodes && rootNodes.map(id => <FormBuilderNode key={id} parent={0} node={nodes[id]} nodes={nodes} />)}
          <div className="col s12">
            <button 
              className="btn-small waves-effect grey" 
              onClick={addRootNode}>
            Add Input</button>
          </div>
        </div>
      </div>
    </div>;
};

FormBuilder.propTypes = {
  template: templateType,
  addRootNode: func,
  loadTemplate: func,
  saveTemplate: func
};
