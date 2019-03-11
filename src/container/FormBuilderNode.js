import { connect } from 'react-redux';
import { FormBuilderNode } from '../components/FormBuilderNode';
import { addSubNode, updateNode, deleteNode } from '../store/actions';

const mapStateToProps = (state) => ({
  nodes: state.nodes,
  templateId: state.template.id
});

const mapDispatchToProps = {
  addSubNode, 
  updateNode, 
  deleteNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderNode);
