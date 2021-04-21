import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import {
  setContactFieldValue,
  trySendContactMessage,
  setContactControlMessage,
  validateContactEmail,
  validateLength,
  validateContentLength,
} from 'src/actions/other';

const mapStateToProps = ({ other }) => ({
  name: other.contact.name,
  email: other.contact.email,
  content: other.contact.content,
  loading: other.contact.isLoading,
  messageParams: other.messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => dispatch(setContactFieldValue(value, name)),
  trySendContactMessage: () => dispatch(trySendContactMessage()),
  setControlMessage: ({ message, name, value }) => dispatch(
    setContactControlMessage({ message, name, value }),
  ),
  validateEmail: ({ message, value }) => {
    dispatch(validateContactEmail({ message, emailContact: value }));
  },
  validateNameLength: ({ message, value }) => {
    dispatch(validateLength({ message, name: value }));
  },
  validateContentLength: ({ message, value }) => {
    dispatch(validateContentLength({ message, content: value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
