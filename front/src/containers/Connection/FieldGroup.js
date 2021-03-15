import { connect } from 'react-redux';
import FieldGroup from 'src/components/Connection/FieldGroup';
import {
  setSignInFieldValue,
  setSignInControlMessage,
} from 'src/actions/auth';

const mapStateToProps = ({ auth }, { name }) => ({
  value: auth[name].value,
  message: auth[name].controlMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: ({ value, name }) => dispatch(setSignInFieldValue({ value, name })),
  setControlMessage:
    ({ message, name, value }) => dispatch(setSignInControlMessage({ message, name, value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldGroup);
