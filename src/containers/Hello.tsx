import Hello from '../components/Hello';
import * as actions from '../actions/';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {ControlState} from '../types/state';

export function mapStateToProps({ enthusiasmLevel, languageName }: ControlState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ControlStateAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
