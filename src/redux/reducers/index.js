// Here's where combine reducers go
import { combineReducers } from "redux";
import NavbarMenuReducer from "./NavbarMenuReducer";
import ModalFormReducer from "./ModalFormReducer";
import PatientDashboardReducer from "./PatientDashboardReducer";
import ConsultantDashboardReducer from "./ConsultantDashboardReducer";
import RemovePersistReducer from './RemovePersistReducer'

const rootReducer = combineReducers({
  NavbarMenuReducer,
  ModalFormReducer,
  PatientDashboardReducer,
  ConsultantDashboardReducer,
  RemovePersistReducer,
});

export default rootReducer;

