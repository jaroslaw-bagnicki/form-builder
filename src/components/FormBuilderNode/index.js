import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { formBuilderNodeType, inputTypesList, conditionTypesLists } from '../../types';
import M from 'materialize-css';
import styles from './styles.module.css';

export class FormBuilderNode extends Component {

  static propTypes = {
    nodes: arrayOf(formBuilderNodeType).isRequired,
    node: formBuilderNodeType.isRequired
  }

  state = {
    conditionType: this.props.node.condition && this.props.node.condition.type,
    conditionValue: this.props.node.condition && this.props.node.condition.value,
    question: this.props.node.question,
    type: this.props.node.type
  }

  handleChange = (e) => {
    let newVal = e.target.value;
    if (e.target.type === 'number') newVal = Number.parseFloat(newVal);
    if (e.target.type === 'select-one') newVal = (newVal == 'true');
    this.setState({
      [e.target.name]: newVal
    });
  };

  componentDidMount() {
    M.AutoInit();
  }

  renderCondition() {
    const {id, condition: { valueType }} = this.props.node;
    const value = this.state.conditionValue;
    const input = {
      bool: <select id={`${id}-conditionValue`} name="conditionValue" value={value} onChange={this.handleChange}>
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
          <select id={`${id}-condition`} name="condition" type="text" value={this.state.conditionType} onChange={this.handleChange}>
            { conditionTypesLists[valueType].map(({key, label}) => (
              <option key={key} value={key} >{label}</option>
            ))}
          </select>
        </div>
        <div className="input-field col s6">{ input[valueType] }</div>
      </div>
    );
  }

  renderSubnodes(subnodes) {
    return (
      <>
        { subnodes.map(id => {
          const node = this.props.nodes.find(node => node.id === id);
          return (
            <FormBuilderNode key={node.id} node={node} nodes={this.props.nodes} />
          );
        })}
      </>
    );
  }
  
  render() {
    const { node: {id, condition, subnodes} } = this.props;
    return (
      <div className={styles.container}> 
        <div className="card large">
          <div className="card-content">
            { condition && this.renderCondition() }
            <div className="input-field">
              <label htmlFor={`${id}-question`}>Question</label>
              <input id={`${id}-question`} name="question" type="text" value={this.state.question} onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor={`${id}-type`} className="active">Type</label>
              <select id={`${id}-type`} name="type" value={this.state.type} onChange={this.handleChange}>
                { inputTypesList.map(({key, label}) => (
                  <option key={key} value={key} >{label}</option>
                )) }
              </select>
            </div>
  
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
