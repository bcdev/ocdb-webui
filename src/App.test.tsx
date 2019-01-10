import * as React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { shallow } from "enzyme";

import App from './App';
import Dashboard from "./containers/Dashboard";

/*
interface MockDashboardState {
    currentDrawer: string;
    loginDialogOpen: boolean;
    configDialogOpen: boolean,
    advancedSearchDialogOpen: boolean;

    searchHistory: SearchHistoryItem[];
}

interface MockState {
    dashboardState: DashboardState;
}


const mockInitState = {
    dashboardState: newDashboardState(),
    configState: newConfigState(),
    searchFormState: newSearchFormState(),
    searchMapState: newSearchMapState(),
    messageLogState: newMessageLogState(),
    sessionState: newSessionState(),
    dataState: newDataState(),
    dataTableState: newDataTableState(),
    advancedSearchState: newAdvancedSearchState(),
};

const middlewares = [thunk, logger]
const mockStore = configureMockStore(middlewares)
*/

describe("App", () => {
    it('renders DashBoard', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Dashboard).length).toBe(1);
    });

    it('renders CssBaseline', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CssBaseline).length).toBe(1);
    });

    /* TODO: Check why App does not render MessageLog. Should/Does*/
    // it('renders MessageLog', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find(MessageLog).length).toBe(1);
    // });
});
