import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {UploadDataPage} from '../components/UploadDataPage';

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

export default connect(mapStateToProps, mapDispatchToProps)(UploadDataPage);
