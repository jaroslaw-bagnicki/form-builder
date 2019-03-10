import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import M from 'materialize-css';
import { formBuilderNodeType, formBuilderConditonType, inputTypesDict } from '../../types';
import styles from './styles.module.css';

export class FormBuilderNode extends Component {

  static propTypes = {
    nodes: arrayOf(formBuilderNodeType).isRequired,
    node: formBuilderNodeType.isRequired,
    condition: formBuilderConditonType
  }

  state = {
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

  renderCondition() {
    // TODO
  }

  renderSubnodes(subnodes) {
    return (
      <>
        { subnodes.map(subnode => {
          const node = this.props.nodes.find(node => node.id === subnode.nodeId);
          return (
            <FormBuilderNode key={node.id} node={node} condition={subnode.condition} nodes={this.props.nodes} />
          );
        })}
      </>
    );
  }
  
  render() {
    const { node: {id, subnodes}, condition } = this.props;
    return (
      <div className={styles.container}> 
        <div className={['card', styles.card].join(' ')}>
          <div className="card-content">
            { condition && this.renderCondition() }
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
            {this.renderSubnodes(subnodes)}
          </div> }
      </div>

    );
  }
}
