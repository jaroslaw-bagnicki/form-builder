import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';
import { addRootNode } from '../store/actions/nodeActions';

const mapStateToProps = (state) => ({
  template: state.template
});

const mapDispatchToProps = {
  addRootNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
