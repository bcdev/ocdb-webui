import Hello from '../components/Hello';
import * as actions from '../actions/';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {State} from '../types/state';

export function mapStateToProps(state: State) {
    return {
        enthusiasmLevel: state.control.enthusiasmLevel,
        languageName: state.control.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
