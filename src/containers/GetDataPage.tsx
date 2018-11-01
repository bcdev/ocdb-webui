import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {GetDataPage} from '../components/GetDataPage';

export function mapStateToProps(state: State) {
    return {
        selectedGetDataTabId: state.control.selectedGetDataTabId
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onGetDataTabChange: (newGetDataTabId: string) => {
            dispatch(actions.updateGetDataTabId(newGetDataTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetDataPage);
