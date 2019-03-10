import React, { Component } from 'react';
import { arrayOf, func } from 'prop-types';
import { formBuilderNodeType, inputTypesList, conditionTypesLists } from '../../types';
import { FormBuilderNode as ConnectedFormBuilderNode } from '../../container';
import M from 'materialize-css';
import styles from './styles.module.css';

export class FormBuilderNode extends Component {

  static propTypes = {
    nodes: arrayOf(formBuilderNodeType).isRequired,
    node: formBuilderNodeType.isRequired,
    addSubnode: func.isRequired,
    updateNode: func.isRequired, 
    deleteNode: func.isRequired
  }

  handleChange = (e) => {
    let newVal = e.target.value;
    if (newVal === 'true') newVal = true;
    if (newVal === 'false') newVal = false;
    if (e.target.type === 'number') newVal = Number.parseFloat(newVal);
    this.props.updateNode({[e.target.name]: newVal});
  };

  handleAddSubinput = () => {
    console.log('handleAddSubinput()');
    this.props.addSubnode(this.props.node.id);
  }

  handleDelete = () => {
    console.log('handleDelete()');
    this.props.addSubnode(this.props.node.id);
  }

  componentDidMount() {
    M.AutoInit();
  }

  renderCondition() {
    const { id, conditionType: type, conditionValue: value } = this.props.node;
    const input = {
      boolean: <select id={`${id}-conditionValue`} name="conditionValue" value={value} onChange={this.handleChange}>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
      </select>,
      number: <input id={`${id}-conditionValue`} name="conditionValue" type="number" value={value} onChange={this.handleChange} /> ,
      string: <input id={`${id}-conditionValue`} name="conditionValue" type="text" value={value} onChange={this.handleChange} />
    };

    return (
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={`${id}-condition`} className="active">Condition</label>
          <select id={`${id}-condition`} name="conditionType" type="text" value={type} onChange={this.handleChange}>
            { conditionTypesLists[typeof value].map(({key, label}) => (
              <option key={key} value={key} >{label}</option>
            ))}
          </select>
        </div>
        <div className="input-field col s6">{ input[typeof value] }</div>
      </div>
    );
  }

  renderSubnodes(subnodes) {
    return (
      <>
        { subnodes.map(id => {
          const node = this.props.nodes.find(node => node.id === id);
          return (
            <ConnectedFormBuilderNode key={node.id} node={node} nodes={this.props.nodes} />
          );
        })}
      </>
    );
  }
  
  render() {
    const { id, conditionType, questionText, inputType, subnodes } = this.props.node;
    return (
      <div className={styles.container}> 
        <div className="card fix-width">
          <div className="card-content">
            { conditionType && this.renderCondition() }
            <div className="input-field">
              <label htmlFor={`${id}-question`} className="active">Question</label>
              <input id={`${id}-question`} name="questionText" type="text" value={questionText} onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor={`${id}-type`} className="active">Type</label>
              <select id={`${id}-type`} name="inputType" value={inputType} onChange={this.handleChange}>
                { inputTypesList.map(({key, label}) => (
                  <option key={key} value={key} >{label}</option>
                )) }
              </select>
            </div>
          </div>
          <div className="card-action">
            <button className="btn-small waves-effect grey" onClick={this.handleAddSubinput}>Add Sub-input</button> <button className="btn-small waves-effect red lighten-1" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        { (subnodes.length > 0) && 
          <div className={styles.subnodesContainer}> 
            {this.renderSubnodes(subnodes)}
          </div> }
      </div>

    );
  }
}
