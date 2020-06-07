import { connect } from "react-redux";
import { hideModalForm } from "../redux/actions/ModalFormActions";

import AskQuestionForm from "../components/Home/AskQuestionForm";

const mapStateToProps = (state, ownProps) => {
  return {
    visibleModalForm: state.ModalFormReducer.visibleModalForm,
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideModalForm: () => dispatch(hideModalForm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionForm);
