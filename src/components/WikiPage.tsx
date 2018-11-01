import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import Hello from '../containers/Hello';
import './UploadDataPage.css';

interface WikiPageProps {
    selectedWikiTabId: string;
    onWikiTabChange?: (newWikiTabId: string) => void;
}

export class WikiPage extends React.PureComponent<WikiPageProps, any> {

    public render() {
        return (
            <Tabs
                animate={true}
                id='WikiTabs'
                key='vertical'
                renderActiveTabPanelOnly={true}
                vertical={true}
                selectedTabId={this.props.selectedWikiTabId}
                onChange={this.props.onWikiTabChange}
            >
                <Tab id="w-home" title="Wiki Home" panel={<Hello/>}/>
                <Tab id="w-lu" title="Latest Updates" panel={<Hello/>}/>
                <Tab id="w-popular" title="Popular" panel={<Hello/>}/>
            </Tabs>
        )
    }
}