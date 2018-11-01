import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import './GetDataPage.css';
import Hello from '../containers/Hello';

interface GetDataProps {
    selectedGetDataTabId: string;
    onGetDataTabChange?: (newGetDataTabId: string) => void;
}

export class GetDataPage extends React.PureComponent<GetDataProps, any> {

    public render() {
        return (
            <Tabs
                animate={true}
                id='GetDataTabs'
                key='vertical'
                renderActiveTabPanelOnly={true}
                vertical={true}
                selectedTabId={this.props.selectedGetDataTabId}
                onChange={this.props.onGetDataTabChange}
            >
                <Tab id="gd-fs" title="File Search" panel={<Hello/>}/>
                <Tab id="gd-vs" title="Validation Search" panel={<Hello/>}/>
                <Tab id="gd-tst" title="Time Series Tool" panel={<Hello/>}/>
                <Tab id="gd-ba" title="Browse Archive" panel={<Hello/>}/>
                <Tab id="gd-nomad" title="NOMAD" panel={<Hello/>}/>
                <Tab id="gd-downloads" title="Software Downloads" panel={<Hello/>}/>
            </Tabs>
        )
    }
}