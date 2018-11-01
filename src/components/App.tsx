import * as React from 'react';
import './App.css';
import NavigationBar from '../containers/NavigationBar';
import AboutPage from '../containers/AboutPage';
import GetDataPage from '../containers/GetDataPage';
import UploadDataPage from '../containers/UploadDataPage';
import {HomePage} from './HomePage';
import WikiPage from '../containers/WikiPage';

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
        } else if (this.props.navTabId == 'GetData') {
            mainTabs = <GetDataPage/>
        } else if (this.props.navTabId == 'UploadData') {
            mainTabs = <UploadDataPage/>
        } else if (this.props.navTabId == 'Wiki') {
            mainTabs = <WikiPage/>
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

