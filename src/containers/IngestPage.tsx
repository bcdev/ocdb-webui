import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {IngestPage} from '../components/Pages/IngestPage';

export function mapStateToProps(state: State) {
    return {
        selectedUploadDataTabId: state.control.selectedUploadDataTabId
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onUploadDataTabChange: (newUploadDataTabId: string) => {
            dispatch(actions.updateUploadDataTabId(newUploadDataTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IngestPage);
