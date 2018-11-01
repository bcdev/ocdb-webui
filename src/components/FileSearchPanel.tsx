import * as React from 'react';
import './FileSearchPanel.css';
import {Button, Collapse, Icon} from '@blueprintjs/core';

interface FileSearchPanelProps {
    isGeneralSearchCollapsibleOpen: boolean;
    isFileSearchCollapsibleOpen: boolean;
    onGeneralSearchCollapsibleChange: (newState: boolean) => void;
    onFileSearchCollapsibleChange: (newState: boolean) => void;
}

export class FileSearchPanel extends React.PureComponent<FileSearchPanelProps, any> {

    public render() {
        return (
            <div className='file-search-panel'>
                <div className='file-search-panel-info'>The File Search allows visitors to search the bio-optical
                    archive for in situ measurements of apparent and inherent optical properties, phytoplankton pigment
                    concentrations, and other oceanographic and atmospheric data. Search results return a list of
                    matching data files which may be viewed, downloaded, mapped and plotted. Data access and use are
                    governed by the SeaBASS Data Access Policy.
                </div>
                <div>
                    <div className='collapsible-title'>
                        <div>General Search Parameters</div>
                        <Icon icon='chevron-down' className='collapsible-title-icon'/>
                    </div>
                    <Collapse isOpen={this.props.isGeneralSearchCollapsibleOpen} className='general-search-collapsible'>
                        <div>Date input</div>
                        <div>Map display</div>
                        <div>Keyword search filters</div>
                    </Collapse>
                </div>
                <div>
                    <div className='collapsible-title'>
                        <div>File Search Parameters</div>
                        <Icon icon='chevron-down' className='collapsible-title-icon'/>
                    </div>
                    <Collapse isOpen={this.props.isFileSearchCollapsibleOpen} className='file-search-collapsible'>
                        <div>Water depth</div>
                        <div>Wavelength options</div>
                        <div>Include Optically Shallow Measurements</div>
                        <div>Products</div>
                    </Collapse>
                </div>
                <Button icon="search" text='Search'/>
            </div>
        )
    }
}