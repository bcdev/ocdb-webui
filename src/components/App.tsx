import * as React from 'react';
import './App.css';
import {Classes, InputGroup, Tab, Tabs} from '@blueprintjs/core';
import Hello from '../containers/Hello';
import {NavigationBar} from './NavigationBar';

interface AppState {
    animate: boolean;
    activePanelOnly: boolean;
    vertical: boolean;
}

export class App extends React.PureComponent<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state =
            {
                animate: true,
                activePanelOnly: true,
                vertical: true
            };
    }

    public render() {
        return (
            <div className="App">
                <NavigationBar/>
                <Tabs
                    animate={this.state.animate}
                    id="TabsExample"
                    key={this.state.vertical ? 'vertical' : 'horizontal'}
                    renderActiveTabPanelOnly={this.state.activePanelOnly}
                    vertical={this.state.vertical}
                >
                    <Tab id="rx" title="React" panel={<Hello/>}/>
                    <Tab id="ng" title="Angular" panel={<Hello/>}/>
                    <Tab id="mb" title="Ember" panel={<Hello/>}/>
                    <Tab id="bb" disabled={true} title="Backbone" panel={<Hello/>}/>
                    <Tabs.Expander/>
                    <InputGroup className={Classes.FILL} type="text" placeholder="Search..."/>
                </Tabs>
            </div>
        )
    }
}

export default App;

