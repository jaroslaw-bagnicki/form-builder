import { connect } from 'react-redux';
import { FormBuilderNode } from '../components/FormBuilderNode';
import { addSubnode, updateNode, deleteNode } from '../store/actions';

const mapStateToProps = (state) => ({
  nodes: state.nodes,
  templateId: state.template.id
});

const mapDispatchToProps = {
  addSubnode, 
  updateNode, 
  deleteNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderNode);
