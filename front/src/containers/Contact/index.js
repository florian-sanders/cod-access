import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import {
  setContactFieldValue,
  tryContact,
  setContactControlMessage,
  validateContactEmail,
  validateLenght,
  validateContentLenght,
} from 'src/actions/forget';

const mapStateToProps = (state) => ({
  name: state.forget.name,
  emailContact: state.forget.emailContact,
  content: state.forget.content,
  loading: state.forget.loading,
  isContactDone: state.forget.isContactDone,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setContactFieldValue(value, name)),
  tryContact: () => dispatch(tryContact()),
  setControlMessage: ({ message, name, value }) => dispatch(
    setContactControlMessage({ message, name, value }),
  ),
  validateLenght: ({ message, value }) => {
    dispatch(validateLenght({ message, name: value }));
  },
  validateContentLenght: ({ message, value }) => {
    dispatch(validateContentLenght({ message, content: value }));
  },
  validateEmail: ({ message, value }) => {
    dispatch(validateContactEmail({ message, emailContact: value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
