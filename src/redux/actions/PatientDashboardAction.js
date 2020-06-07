import { 
    PATIENT_SELECTED_NAV,
    PATIENT_DATA,
} from "../actionTypes";

export function patientSelectedNav(data) {
  return {
    type: PATIENT_SELECTED_NAV,
    selectedNav: data.selectedNav
  };
}

export function setPatientData(data) {
  return {
    type: PATIENT_DATA,
    patientData: data.patientData
  };
}