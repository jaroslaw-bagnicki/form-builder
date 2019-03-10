import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';
import { addNode } from '../store/actions';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  addNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
