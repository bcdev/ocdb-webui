import * as React from 'react';
import './App.css';
import NavigationBar from '../containers/NavigationBar';
import AboutPage from '../containers/AboutPage';
import {HomePage} from './HomePage';
import SearchPage from '../containers/SearchPage';
import IngestPage from '../containers/IngestPage';
import HelpPage from '../containers/HelpPage';

interface AppState {
    animate: boolean;
    activePanelOnly: boolean;
    vertical: boolean;
}

export interface AppProps {
    navTabId?: string;
    sideTabId?: string;
    onSideTabChange?: (newSideTabId: string) => void;
}

export class App extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state =
            {
                animate: true,
                activePanelOnly: true,
                vertical: true
            };
    }

    public render() {

        let mainTabs;
        if (this.props.navTabId == 'About') {
            mainTabs = <AboutPage/>
        } else if (this.props.navTabId == 'Search') {
            mainTabs = <SearchPage/>
        } else if (this.props.navTabId == 'Ingest') {
            mainTabs = <IngestPage/>
        } else if (this.props.navTabId == 'Help') {
            mainTabs = <HelpPage/>
        } else {
            mainTabs = <HomePage/>
        }

        return (
            <div className="App">
                <NavigationBar/>
                <div className='main-tabs'>
                    {mainTabs}
                </div>
            </div>
        )
    }
}

export default App;

