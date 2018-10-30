import {connect} from 'react-redux';
import {ControlState} from '../types/state';
import App from '../components/App';

export function mapStateToProps({navTabId, sideTabId}: ControlState) {
    return {
        navTabId: navTabId,
        sideTabId: sideTabId,
    };
}

export default connect(mapStateToProps)(App);
