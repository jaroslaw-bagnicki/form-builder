import { connect } from 'react-redux';
import { FormBuilderNode } from '../components/FormBuilderNode';
import { addSubnode, updateNode, deleteNode } from '../store/actions';

const mapStateToProps = (state) => ({
  nodes: state.nodes
});

const mapDispatchToProps = {
  addSubnode, 
  updateNode, 
  deleteNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderNode);
