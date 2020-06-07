import { connect } from "react-redux";
import { hideModalForm, showModalForm } from "../redux/actions/ModalFormActions";

import Forum from "../components/Home/Forum"

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
)(Forum);
