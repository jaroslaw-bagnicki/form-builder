import React, { Component } from 'react';
import { objectOf, func } from 'prop-types';
import { nodeType, nodeIdType } from '../../types';
import { inputTypesList, conditionTypesLists, findNodesToRemove } from '../../helpers';
import { FormBuilderNode as ConnectedFormBuilderNode } from '../../container';
import M from 'materialize-css';
import styles from './styles.module.css';

export class FormBuilderNode extends Component {

  static propTypes = {
    parent: nodeIdType.isRequired,
    node: nodeType.isRequired,
    nodes: objectOf(nodeType).isRequired,
    addSubNode: func.isRequired,
    updateNode: func.isRequired, 
    deleteNodes: func.isRequired
  }

  handleChange = (e) => {
    let newVal = e.target.value;
    if (newVal === 'true') newVal = true;
    if (newVal === 'false') newVal = false;
    if (e.target.type === 'number') newVal = Number.parseFloat(newVal);
    this.props.updateNode(this.props.node.id, { [e.target.name]: newVal });
  };

  handleAddSubNode = () => {
    this.props.addSubNode(this.props.node.id, this.props.node.inputType);
  }

  handleDelete = () => {
    const ids = findNodesToRemove(this.props.node.id, this.props.nodes);
    this.props.deleteNodes(ids, this.props.parent);
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

  renderSubnodes() {
    const {node, nodes } = this.props;
    return (
      <>
        { node.subnodes.map(id => <ConnectedFormBuilderNode key={id} parent={node.id} node={nodes[id]} nodes={nodes} />)}
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
              <select id={`${id}-type`} name="inputType" value={inputType} onChange={this.handleChange} disabled={(subnodes.length > 0)}>
                { inputTypesList.map(({key, label}) => (
                  <option key={key} value={key} >{label}</option>
                )) }
              </select>
            </div>
          </div>
          <div className="card-action">
            <button className="btn-small waves-effect grey" onClick={this.handleAddSubNode}>Add Sub-input</button> <button className="btn-small waves-effect red lighten-1" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        { (subnodes.length > 0) && 
          <div className={styles.subnodesContainer}> 
            {this.renderSubnodes()}
          </div> }
      </div>

    );
  }
}
