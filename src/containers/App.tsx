import {connect} from 'react-redux';
import {State} from '../types/state';
import App from '../components/App';
import {Dispatch} from 'redux';
import * as actions from '../actions';

export function mapStateToProps(state: State) {
    return {
        navTabId: state.control.navTabId,
        sideTabId: state.control.sideTabId,
        languageName: state.control.languageName,
        enthusiasmLevel: state.control.enthusiasmLevel
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onSideTabChange: (newSideTabId: string) => {
            dispatch(actions.updateSideTabId(newSideTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
