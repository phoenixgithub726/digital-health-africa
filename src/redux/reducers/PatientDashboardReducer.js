import { 
    PATIENT_SELECTED_NAV,
    PATIENT_DATA,
} from "../actionTypes";

const DEFAULT_STATE = {
    patientSelectedNav: 'CONSULTANTS',
    patientData: [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case PATIENT_SELECTED_NAV:
            return { ...state, patientSelectedNav: action.selectedNav };
        case PATIENT_DATA:
            console.log("patient data")
            return { ...state, patientData: action.patientData };
        default:
            return state;
    }
};