import { SHOW_MODAL_FORM, HIDE_MODAL_FORM } from "../actionTypes";

const DEFAULT_STATE = {
  visibleModalForm: false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL_FORM:
      return { ...state, visibleModalForm: true };
    case HIDE_MODAL_FORM:
      return { ...state, visibleModalForm: false };
    default:
      return state;
  }
};