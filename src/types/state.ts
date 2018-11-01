
export interface State {
    control: ControlState;
}

export interface ControlState {
    languageName: string;
    enthusiasmLevel: number;

    navTabId: string;

    // Side-tabs-related states
    selectedAboutTabId: string;
    selectedGetDataTabId: string;
    selectedUploadDataTabId: string;
    selectedWikiTabId: string;

    // Collapsible-related states
    isGeneralSearchCollapsibleOpen: boolean;
    isFileSearchCollapsibleOpen: boolean;
}