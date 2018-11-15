import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {HelpPage} from '../components/Pages/HelpPage';

export function mapStateToProps(state: State) {
    return {
        selectedWikiTabId: state.control.selectedWikiTabId
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onWikiTabChange: (newWikiTabId: string) => {
            dispatch(actions.updateWikiTabId(newWikiTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpPage);
