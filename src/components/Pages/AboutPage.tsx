import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import './AboutPage.css';
import '../Styles.css';
import {AboutSeaBassPanel} from '../Panels/AboutSeaBassPanel';
import {GettingStartedPanel} from '../Panels/GettingStartedPanel';
import {AccessPolicyPanel} from '../Panels/AccessPolicyPanel';
import {FaqPanel} from './FaqPanel';

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
                <Tab id="at-about" title="About SeaBASS" panel={<AboutSeaBassPanel/>} className='page-tab'/>
                <Tab id="at-gs" title="Getting Started" panel={<GettingStartedPanel/>} className='page-tab'/>
                <Tab id="at-ap" title="Access Policy" panel={<AccessPolicyPanel/>} className='page-tab'/>
                <Tab id="at-faq" title="FAQ" panel={<FaqPanel/>} className='page-tab'/>
            </Tabs>
        )
    }
}