import { connect } from 'react-redux';
import { FormBuilderNode } from '../components/FormBuilderNode';
import { addSubNode, updateNode, deleteNode } from '../store/actions/nodeActions';

const mapDispatchToProps = {
  addSubNode, 
  updateNode, 
  deleteNode
};

export default connect(null, mapDispatchToProps)(FormBuilderNode);
