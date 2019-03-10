import { connect } from 'react-redux';
import { FormBuilder } from '../components/FormBuilder';

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(FormBuilder);
