import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import M from 'materialize-css';
import { formBuilderNodeType, formBuilderConditonType, inputTypesDict } from '../../types';

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
  
  render() {
    const { node: {id}, condition } = this.props;
    return (
      <div className="card">
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

    );
  }
}
