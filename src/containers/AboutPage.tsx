import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {AboutPage} from '../components/Pages/AboutPage';

export function mapStateToProps(state: State) {
    return {
        selectedAboutTabId: state.control.selectedAboutTabId
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onAboutTabChange: (newAboutTabId: string) => {
            dispatch(actions.updateAboutTabId(newAboutTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
