import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import './AboutPage.css';
import Hello from '../containers/Hello';

interface AboutPageProps {
    selectedAboutTabId: string;
    onAboutTabChange?: (newAboutTabId: string) => void;
}

export class AboutPage extends React.PureComponent<AboutPageProps, any> {

    public render() {
        return (
            <Tabs
                animate={true}
                id='AboutTabs'
                key='vertical'
                renderActiveTabPanelOnly={true}
                vertical={true}
                selectedTabId={this.props.selectedAboutTabId}
                onChange={this.props.onAboutTabChange}
            >
                <Tab id="at-about" title="About SeaBASS" panel={<Hello/>}/>
                <Tab id="at-gs" title="Getting Started" panel={<Hello/>}/>
                <Tab id="at-ap" title="Access Policy" panel={<Hello/>}/>
                <Tab id="at-faq" title="FAQ" panel={<Hello/>}/>
            </Tabs>
        )
    }
}