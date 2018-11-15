import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {FileSearchPanel} from '../components/Panels/FileSearchPanel';

export function mapStateToProps(state: State) {
    return {
        isGeneralSearchCollapsibleOpen: state.control.isGeneralSearchCollapsibleOpen,
        isFileSearchCollapsibleOpen: state.control.isFileSearchCollapsibleOpen
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onGeneralSearchCollapsibleChange: () => {
            dispatch(actions.toggleGeneralSearchCollapsibleState())
        },
        onFileSearchCollapsibleChange: () => {
            dispatch(actions.toggleFileSearchCollapsibleState())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FileSearchPanel);
