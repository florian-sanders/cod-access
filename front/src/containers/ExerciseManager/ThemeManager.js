import { connect } from 'react-redux';
import ThemeManager from 'src/components/ExerciseManager/ThemeManager';

import {
  toggleThemeManager,
  updateThemeManager,
} from 'src/actions/exerciseManager/themeManager';

const mapStateToProps = ({ themeManager }) => ({
  ...themeManager,
});

const mapDispatchToProps = (dispatch) => ({
  handleThemeCheckbox: (themeId) => dispatch(toggleThemeManager(themeId)),
  saveOnBlur: (themeId) => dispatch(updateThemeManager(themeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeManager);
