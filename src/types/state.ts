
export interface State {
    control: ControlState;
}

export interface ControlState {
    languageName: string;
    enthusiasmLevel: number;
    navTabId: string;
    sideTabId: string;
}