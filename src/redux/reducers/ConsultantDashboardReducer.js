import {
    CONSULTANT_SELECTED_NAV,
    CONSULTANT_DATA,
} from "../actionTypes";

const DEFAULT_STATE = {
    consultantSelectedNav: 'PATIENTS',
    consultantData: [],
};

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case CONSULTANT_SELECTED_NAV:
            return { ...state, consultantSelectedNav: action.selectedNav };
        case CONSULTANT_DATA:
            console.log(action.consultantData)
            return { ...state, consultantData: action.consultantData };
        default:
            return state;
    }
};