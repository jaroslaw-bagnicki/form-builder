import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';
import { addRootNode } from '../store/actions/nodeActions';
import { loadTemplate, saveTemplate } from '../store/actions/dbActions';

const mapStateToProps = (state) => ({
  template: state.template
});

const mapDispatchToProps = {
  addRootNode,
  loadTemplate,
  saveTemplate
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
