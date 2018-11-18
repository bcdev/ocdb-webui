import { ConfigState } from "./configState";
import { DashboardState } from "./dashboardState";
import { SearchMapState } from './searchMapState';
import { SearchFormState } from './searchFormState';

export interface AppState {
    configState:  ConfigState;
    dashboardState:  DashboardState;
    searchFormState: SearchFormState;
    searchMapState: SearchMapState;
}