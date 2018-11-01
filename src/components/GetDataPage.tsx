import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import './Styles.css';
import {ValidationSearchPanel} from './ValidationSearchPanel';
import {TimeSeriesToolPanel} from './TimeSeriesToolPanel';
import {BrowseArchivePanel} from './BrowseArchivePanel';
import {NomadPanel} from './NomadPanel';
import {SoftwareDownloadPanel} from './SoftwareDownloadPanel';
import {ListsPanel} from './ListsPanel';
import FileSearchPanel from '../containers/FileSearchPanel';

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
                <Tab id="gd-fs" title="File Search" panel={<FileSearchPanel/>} className='page-tab'/>
                <Tab id="gd-vs" title="Validation Search" panel={<ValidationSearchPanel/>} className='page-tab'/>
                <Tab id="gd-tst" title="Time Series Tool" panel={<TimeSeriesToolPanel/>} className='page-tab'/>
                <Tab id="gd-ba" title="Browse Archive" panel={<BrowseArchivePanel/>} className='page-tab'/>
                <Tab id="gd-nomad" title="NOMAD" panel={<NomadPanel/>} className='page-tab'/>
                <Tab id="gd-sd" title="Software Downloads" panel={<SoftwareDownloadPanel/>} className='page-tab'/>
                <Tab id="gd-lists" title="Lists" panel={<ListsPanel/>} className='page-tab'/>
            </Tabs>
        )
    }
}