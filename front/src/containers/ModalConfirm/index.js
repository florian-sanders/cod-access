import { connect } from 'react-redux';
import ModalConfirm from 'src/components/ModalConfirm';

import { unsetModalConfirm } from 'src/actions/other';

const mapStateToProps = ({ other: { modalConfirmParams } }) => ({
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(unsetModalConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);
