import { connect } from 'react-redux';
import ThemeManager from 'src/components/ExerciseManager/ThemeManager';

import {
  setThemeManagerFieldValue,
  updateThemeManager,
} from 'src/actions/exerciseManager/themeManager';

const mapStateToProps = ({ themeManager: { themes } }) => ({
  themes,
});

const mapDispatchToProps = (dispatch) => ({
  patchThemeUpdate: ({ name: themeId, value }) => dispatch(updateThemeManager({
    themeId: Number(themeId),
    isChecked: value,
  })),
  updateThemeState: ({ name: themeId, value }) => dispatch(setThemeManagerFieldValue({
    themeId: Number(themeId),
    isChecked: value,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeManager);
