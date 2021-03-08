import { connect } from 'react-redux';
import FieldGroup from 'src/components/Connection/FieldGroup';
import { setSignInFieldValue } from 'src/actions/auth';

const mapStateToProps = ({ auth }, { name }) => ({
  value: auth[name],
});

const mapDispatchToProps = (dispatch, { name }) => ({
  changeValue: (value) => dispatch(setSignInFieldValue(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldGroup);
