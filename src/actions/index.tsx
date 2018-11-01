import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface UpdateNavTabId {
    type: constants.UPDATE_NAVTAB_ID;
    newTabId: string;
}

export interface UpdateSideTabId {
    type: constants.UPDATE_ABOUTTAB_ID | constants.UPDATE_GETDATATAB_ID |
        constants.UPDATE_UPLOADDATATAB_ID |constants.UPDATE_WIKITAB_ID;
    newTabId: string;
}

export type ControlStateAction = IncrementEnthusiasm |
    DecrementEnthusiasm |
    UpdateNavTabId |
    UpdateSideTabId;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function updateNavTabId(newTabId: string): UpdateNavTabId {
    return {
        type: constants.UPDATE_NAVTAB_ID,
        newTabId: newTabId
    }
}

//////////////////////////////
// Side-tab-related actions //
//////////////////////////////

export function updateAboutTabId(newTabId: string): UpdateSideTabId {
    return {
        type: constants.UPDATE_ABOUTTAB_ID,
        newTabId: newTabId
    }
}

export function updateGetDataTabId(newTabId: string): UpdateSideTabId {
    return {
        type: constants.UPDATE_GETDATATAB_ID,
        newTabId: newTabId
    }
}

export function updateUploadDataTabId(newTabId: string): UpdateSideTabId {
    return {
        type: constants.UPDATE_UPLOADDATATAB_ID,
        newTabId: newTabId
    }
}

export function updateWikiTabId(newTabId: string): UpdateSideTabId {
    return {
        type: constants.UPDATE_WIKITAB_ID,
        newTabId: newTabId
    }
}