import * as React from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import logo from './eumetsat.png';
import './NavigationBar.css';

interface NavigationBarState {
    animate: boolean;
}

interface NavigationBarProps {
    navTabId: string;
    onNavTabChange?: (newNavTabId: string) => void;
}

export class NavigationBar extends React.PureComponent<NavigationBarProps, NavigationBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            animate: true
        }
    }

    public render() {
        return (
            <div className='nav-container'>
                <div className='nav-img'>
                    <img src={logo} alt="logo" height='40px' width='125px'/>
                </div>
                <div className='nav-tabs'>
                    <Tabs
                        animate={this.state.animate}
                        id="navbarTabs"
                        large={true}
                        selectedTabId={this.props.navTabId}
                        onChange={this.props.onNavTabChange}
                    >
                        <Tab id="Home" title="Home"/>
                        <Tab id="About" title="About"/>
                        <Tab id="GetData" title="Get Data"/>
                        <Tab id="UploadData" title="Upload Data"/>
                        <Tab id="Wiki" title="Wiki"/>
                    </Tabs>
                </div>
                <div className='nav-search'>
                    <input className="bp3-input" type="search" placeholder="Search"/>
                </div>
            </div>
        )
    }
}