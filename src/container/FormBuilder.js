import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';
// import { addRootNode } from '../store/actions';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  template: state.template
});

const mapDispatchToProps = {
  // addRootNode
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
