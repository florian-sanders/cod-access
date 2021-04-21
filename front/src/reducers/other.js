import {
  TOGGLE_MENU_VISIBILITY,
  SET_THEMES,
  SET_MODAL_CONFIRM,
  UNSET_MODAL_CONFIRM,
  SET_MESSAGE,
  UNSET_MESSAGE,
  SET_APP_LOADING,
  SET_MOBILE_MENU_VISIBILITY,
  SET_CONTACT_CONTROL_MESSAGE,
  SET_CONTACT_FIELD_VALUE,
  SET_CONTACT_LOADING,
  VALIDATE_LENGTH,
  VALIDATE_CONTACT_EMAIL,
  VALIDATE_CONTENT_LENGTH,
} from 'src/actions/other';

const initialState = {
  mobileMenuVisibility: false,
  themes: {
    loading: true,
    data: [],
  },
  contact: {
    name: {
      value: '',
      controlMessage: '',
    },
    email: {
      value: '',
      controlMessage: '',
    },
    content: {
      value: '',
      controlMessage: '',
    },
    isLoading: false,
  },
  appLoading: false,
  modalConfirmParams: {
    heading: '',
    message: '',
    confirmParams: {
      onConfirm: () => { },
      label: '',
    },
    cancelParams: {
      onCancel: () => { },
      label: '',
    },
    isVisible: false,
  },
  messageParams: {
    type: '',
    message: '',
    canBeClosed: true,
    targetComponent: '',
  },
};

const other = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOBILE_MENU_VISIBILITY:
      return {
        ...state,
        mobileMenuVisibility: action.visibility,
      };
    case SET_MESSAGE:
      return {
        ...state,
        messageParams: {
          ...action.messageParams,
        },
      };
    case UNSET_MESSAGE:
      return {
        ...state,
        messageParams: {
          ...initialState.messageParams,
        },
      };
    case UNSET_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirmParams: {
          ...initialState.modalConfirmParams,
        },
      };
    case SET_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirmParams: {
          ...action.modalConfirmParams,
          isVisible: true,
        },
      };
    case SET_THEMES:
      return {
        ...state,
        themes: {
          loading: false,
          data: action.themes,
        },
      };
    case TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        mobileMenuVisibility: !state.mobileMenuVisibility,
      };
    case SET_APP_LOADING:
      return {
        ...state,
        appLoading: action.loading,
      };

    case SET_CONTACT_FIELD_VALUE:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.name]: {
            ...state.contact[action.name],
            value: action.value,
          },
        },
      };
    case SET_CONTACT_LOADING:
      return {
        ...state,
        contact: {
          ...state.contact,
          isLoading: action.isLoading,
        },
      };
    case SET_CONTACT_CONTROL_MESSAGE:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.name]: {
            ...state.contact[action.name],
            controlMessage: action.message,
          },
        },
      };
    case VALIDATE_CONTACT_EMAIL:
      return {
        ...state,
        contact: {
          ...state.contact,
          email: {
            ...state.contact.email,
            controlMessage: action.message,
          },
        },
      };
    case VALIDATE_LENGTH:
      return {
        ...state,
        contact: {
          ...state.contact,
          name: {
            ...state.contact.name,
            controlMessage: action.message,
          },
        },
      };
    case VALIDATE_CONTENT_LENGTH:
      return {
        ...state,
        contact: {
          ...state.contact,
          content: {
            ...state.contact.content,
            controlMessage: action.message,
          },
        },
      };
    default:
      return state;
  }
};

export default other;
