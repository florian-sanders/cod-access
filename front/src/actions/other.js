export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

export const toggleMenuVisibility = () => ({
  type: TOGGLE_MENU_VISIBILITY,
});

export const FETCH_THEMES = 'FETCH_THEMES';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const SET_THEMES = 'SET_THEMES';

export const setThemes = (themes) => ({
  type: SET_THEMES,
  themes,
});
