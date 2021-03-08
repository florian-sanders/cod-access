import { connect } from 'react-redux';
import Answer from 'src/components/Exercise/Answer';

import { removeUserAnswer } from 'src/actions/exercises';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  removeAnswer: (answerInfo) => dispatch(removeUserAnswer(answerInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
