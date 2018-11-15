import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import Hello from '../../containers/Hello';
import '../Styles.css';

interface IngestPageProps {
    selectedUploadDataTabId: string;
    onUploadDataTabChange?: (newUploadDataTabId: string) => void;
}

export class IngestPage extends React.PureComponent<IngestPageProps, any> {

    public render() {
        return (
            <Tabs
                animate={true}
                id='UploadDataTabs'
                key='vertical'
                renderActiveTabPanelOnly={true}
                vertical={true}
                selectedTabId={this.props.selectedUploadDataTabId}
                onChange={this.props.onUploadDataTabChange}
            >
                <Tab id="ud-so" title="Submitting Overview" panel={<Hello/>}/>
                <Tab id="ud-mh" title="Metadata Headers" panel={<Hello/>}/>
                <Tab id="ud-fields" title="Fields" panel={<Hello/>}/>
                <Tab id="ud-fc" title="FCHECK - file checker" panel={<Hello/>}/>
                <Tab id="ud-dg" title="Documentation Guidelines" panel={<Hello/>}/>
            </Tabs>
        )
    }
}