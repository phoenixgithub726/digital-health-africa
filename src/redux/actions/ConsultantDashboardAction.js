import { 
    CONSULTANT_SELECTED_NAV,
    CONSULTANT_DATA,
} from "../actionTypes";

export function consultantSelectedNav(data) {
  return {
    type: CONSULTANT_SELECTED_NAV,
    selectedNav: data.selectedNav
  };
}

export function setConsultantData(data) {
  return {
    type: CONSULTANT_DATA,
    consultantData: data.consultantData
  };
}