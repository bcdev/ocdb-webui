import { connect } from "react-redux";

import { AppState } from "../../states/appState";
import {
    clearSubmissionForm,
    closeDeleteSubmissionFilesAlert,
    closeSubmissionFilesDialog,
    closeSubmissionIssuesDialog,
    closeSubmitSteps,
    deleteSubmissionFile,
    openDeleteSubmissionFilesAlert,
    openSubmissionFilesDialog,
    openSubmissionIssuesDialog,
    openSubmitSteps,
    sendSubmission,
    setSubmissionStatus,
    updateDataFiles,
    updateDocFiles,
    updatePath,
    updateSubmission,
    updateSubmissionFile,
    updateSubmissionId,
    updateSubmissionsForUser
} from "../../actions/submissionActions";
import SubmissionPanel from "../../components/submission/SubmissionPanel";


const mapStateToProps = (state: AppState) => {
    return {
        submissionDialogOpen: state.submissionState.submissionDialogOpen,
        submissionFilesTableOpen: state.submissionState.submissionFilesDialogOpen,
        submissionFileIssueDialogOpen: state.submissionState.submissionFileIssueDialogOpen,
        deleteSubmissionFileAlertOpen: state.submissionState.deleteSubmissionFileAlertOpen,

        submissionsForUser: state.submissionState.foundSubmissions,

        selectedSubmission: state.submissionState.selectedSubmission,
        selectedSubmissionFile: state.submissionState.selectedSubmissionFile,

        // SubmissionDialog
        selectedSubmissionId: state.submissionState.submissionId,

        selectedPath: state.submissionState.path,
        selectedDataFiles: state.submissionState.dataFiles,
        selectedDocFiles: state.submissionState.docFiles,

        user: state.sessionState.user,
    };
};


const mapDispatchToProps = {
    closeSubmissionDialog: closeSubmitSteps,
    openSubmissionDialog: openSubmitSteps,

    openSubmissionFilesTable: openSubmissionFilesDialog,
    closeSubmissionFilesTable: closeSubmissionFilesDialog,

    openSubmissionFileIssueDialog: openSubmissionIssuesDialog,
    closeSubmissionFileIssueDialog: closeSubmissionIssuesDialog,

    openDeleteSubmissionFileAlert: openDeleteSubmissionFilesAlert,
    closeDeleteSubmissionFileAlert: closeDeleteSubmissionFilesAlert,

    updateSubmissionsForUser,

    updateSelectedSubmission:  updateSubmission,
    updateSelectedSubmissionFile: updateSubmissionFile,

    setSubmissionStatus,

    deleteSubmissionFile,

    updateSubmissionId,
    updatePath,
    updateDataFiles,
    updateDocFiles,

    sendSubmission,
    clearSubmissionForm,
};


export default connect(mapStateToProps, mapDispatchToProps)(SubmissionPanel)
