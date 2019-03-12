import { connect } from 'react-redux';
import { FormBuilderNode } from '../components/FormBuilderNode';
import { addSubNode, updateNode, deleteNodes } from '../store/actions/nodeActions';

const mapDispatchToProps = {
  addSubNode, 
  updateNode, 
  deleteNodes
};

export default connect(null, mapDispatchToProps)(FormBuilderNode);
