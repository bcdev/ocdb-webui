import * as React from 'react';
import {Icon, Tab, Tabs} from '@blueprintjs/core';
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
                <div className='nav-title'>
                    {this.props.navTabId}
                </div>
                <div className='nav-tabs'>
                    <Tabs
                        animate={this.state.animate}
                        id="navbarTabs"
                        large={true}
                        selectedTabId={this.props.navTabId}
                        onChange={this.props.onNavTabChange}
                    >
                        <Tab id="Home" title={<Icon icon='home' title='Home'/>}/>
                        <Tab id="About" title={<Icon icon='info-sign' title='About'/>}/>
                        <Tab id="Search" title={<Icon icon='search' title='Search'/>}/>
                        <Tab id="Ingest" title={<Icon icon='plus' title='Ingest'/>}/>
                        <Tab id="Help" title={<Icon icon='help' title='Help'/>}/>
                    </Tabs>
                </div>
                <div className='nav-search'>
                    <input className="bp3-input" type="search" placeholder="Search"/>
                </div>
                <div className='nav-img'>
                    <img src={logo} alt="logo" height='40px' width='125px'/>
                </div>
            </div>
        )
    }
}