import {connect} from 'react-redux';
import {State} from '../types/state';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {NavigationBar} from '../components/Pages/NavigationBar';

export function mapStateToProps(state: State) {
    return {
        navTabId: state.control.navTabId
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onNavTabChange: (newNavTabId: string) => {
            dispatch(actions.updateNavTabId(newNavTabId))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
