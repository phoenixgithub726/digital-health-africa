import { SHOW_MODAL_FORM, HIDE_MODAL_FORM } from "../actionTypes";

export function showModalForm() {
  return {
    type: SHOW_MODAL_FORM
  };
}
export function hideModalForm() {
  return {
    type: HIDE_MODAL_FORM
  };
}