import { connect } from 'react-redux';
import Message from 'src/components/Message';

import { unsetMessage } from 'src/actions/other';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  closeMessage: () => dispatch(unsetMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
