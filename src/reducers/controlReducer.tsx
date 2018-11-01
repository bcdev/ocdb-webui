import {ControlStateAction} from '../actions';
import {
    INCREMENT_ENTHUSIASM,
    DECREMENT_ENTHUSIASM,
    UPDATE_NAVTAB_ID,
    UPDATE_ABOUTTAB_ID,
    UPDATE_GETDATATAB_ID, UPDATE_UPLOADDATATAB_ID, UPDATE_WIKITAB_ID
} from '../constants';
import {ControlState} from '../types/state';
import {initialControlState} from '../types/initialStates';

export function controlReducer(state: ControlState = initialControlState, action: ControlStateAction): ControlState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        case UPDATE_NAVTAB_ID:
            return {
                ...state,
                navTabId: action.newTabId
            };
        case UPDATE_ABOUTTAB_ID:
            return {
                ...state,
                selectedAboutTabId: action.newTabId
            };
        case UPDATE_GETDATATAB_ID:
            return {
                ...state,
                selectedGetDataTabId: action.newTabId
            };
        case UPDATE_UPLOADDATATAB_ID:
            return {
                ...state,
                selectedUploadDataTabId: action.newTabId
            };
        case UPDATE_WIKITAB_ID:
            return {
                ...state,
                selectedWikiTabId: action.newTabId
            };
        default:
            return state;
    }
}