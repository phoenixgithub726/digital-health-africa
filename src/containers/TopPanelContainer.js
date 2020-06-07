import { connect } from "react-redux";
import { hideModalForm, showModalForm } from "../redux/actions/ModalFormActions";

import TopPanel from "../components/NavBar/TopPanel";

const mapStateToProps = (state, ownProps) => {
  return {
    visibleModalForm: state.ModalFormReducer.visibleModalForm,
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onhideModalForm: () => dispatch(hideModalForm()),
    onshowModalForm: () => dispatch(showModalForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanel);
