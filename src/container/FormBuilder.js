import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';
import { addNode } from '../store/actions';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  nodes: state.nodes,
  rootNodes: state.rootNodes
});

const mapDispatchToProps = {
  addNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
