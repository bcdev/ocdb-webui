import * as React from 'react';
import {Alignment, Navbar, Tab, Tabs} from '@blueprintjs/core';
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
            <Navbar className='bp3-dark'>
                <Navbar.Group align={Alignment.LEFT}>
                    <img src={logo} alt="logo" height='40px' width='125px'/>
                </Navbar.Group>
                <Navbar.Group className='nav-tab-group'>
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
                </Navbar.Group>
                <Navbar.Group className='nav-right-group' align={Alignment.RIGHT}>
                    <input className="bp3-input nav-right-group-search" type="search" placeholder="Search"/>
                </Navbar.Group>
            </Navbar>
        )
    }
}