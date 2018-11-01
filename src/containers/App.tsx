import {connect} from 'react-redux';
import {State} from '../types/state';
import App from '../components/App';

export function mapStateToProps(state: State) {
    return {
        navTabId: state.control.navTabId
    };
}

export default connect(mapStateToProps)(App);
