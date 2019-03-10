import React, { Component } from 'react';
import { arrayOf, number } from 'prop-types';
import M from 'materialize-css';
import { formBuilderNodeType, formBuilderConditonType, inputTypesDict, conditonTypesDict } from '../../types';
import styles from './styles.module.css';

export class FormBuilderNode extends Component {

  static propTypes = {
    nodes: arrayOf(formBuilderNodeType).isRequired,
    node: formBuilderNodeType.isRequired,
    condition: formBuilderConditonType,
    parentId: number
  }

  state = {
    conditionType: this.props.condition && this.props.condition.type,
    conditionValue: this.props.condition && this.props.condition.value,
    question: this.props.node.question,
    type: this.props.node.type
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    M.AutoInit();
  }

  renderCondition(condition) {
    const { type, value} = condition;
    const parentId = this.props.parentId;
    return (
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor={`${parentId}-condition`} className="active">Condition</label>
          <select id={`${parentId}-condition`} name="condition" type="text" value={this.state.conditionType} onChange={this.handleChange}>
            { Object.entries(conditonTypesDict).map(type => (
              <option key={type[0]} value={type[0]} >{type[1]}</option>
            ))}
          </select>
        </div>
        <div className="input-field col s6">
          <input id={`${parentId}-conditionValue`} name="conditionValue" type="text" value={this.state.conditionValue} onChange={this.handleChange} />             
        </div>
      </div>
    );
  }

  renderSubnodes(subnodes, id) {
    return (
      <>
        { subnodes.map(subnode => {
          const node = this.props.nodes.find(node => node.id === subnode.nodeId);
          return (
            <FormBuilderNode key={node.id} node={node} parentId={id} condition={subnode.condition} nodes={this.props.nodes} />
          );
        })}
      </>
    );
  }
  
  render() {
    const { node: {id, subnodes}, condition } = this.props;
    return (
      <div className={styles.container}> 
        <div className="card large">
          <div className="card-content">
            { condition && this.renderCondition(condition) }
            <div className="input-field">
              <label htmlFor={`${id}-question`}>Question</label>
              <input id={`${id}-question`} name="question" type="text" value={this.state.question} onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor={`${id}-type`} className="active">Type</label>
              <select id={`${id}-type`} name="type" value={this.state.type} onChange={this.handleChange}>
                { Object.entries(inputTypesDict).map(type => (
                  <option key={type[0]} value={type[0]} >{type[1]}</option>
                )) }
              </select>
            </div>
  
          </div>
        </div>
        { (subnodes.length > 0) && 
          <div className={styles.subnodesContainer}> 
            {this.renderSubnodes(subnodes, id)}
          </div> }
      </div>

    );
  }
}
