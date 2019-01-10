import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { mount, ReactWrapper } from "enzyme";
import { AdvancedSearchItem } from "../../types/advancedSearchDialog";
import AdvancedSearchDialog from './AdvancedSearchDialog';
import TextField from "@material-ui/core/TextField/TextField";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";


interface MockProps{
    open: boolean;
    handleClose: () => void;

    logChange: (filterLog: AdvancedSearchItem[]) => void;
    filterLog: AdvancedSearchItem[];

    leftChange: (left: number) => void;
    bottomChange: (bottom: number) => void;
    rightChange: (right: number) => void;
    topChange: (top: number) => void;
    left: number;
    bottom: number;
    right: number;
    top: number;
}


describe("AdvancedSearchDialog", () => {
    let props: MockProps;

    // Compiler does not recognise AdvancedSearchDialog despite its existence
    // @ts-ignore
    let mountedComponent: ReactWrapper<MockProps, undefined, AdvancedSearchDialog> | undefined;

    const appScreen = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <AdvancedSearchDialog {...props} />
            );
        }

        return mountedComponent;
    };

    beforeEach(() => {
        props = {
            open: true,
            handleClose: () => {},

            logChange: () => {},
            filterLog: [],

            leftChange: () => {},
            bottomChange: () => {},
            rightChange: () => {},
            topChange: () => {},

            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
        };

        mountedComponent = undefined;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdvancedSearchDialog {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Textboxes are rendered", () => {
        expect(appScreen().find(TextField).length).toBe(4);
    });

    it("Dialog is rendered", () => {
        expect(appScreen().find(Dialog).length).toBe(1);
    });

    it("DialogTitle is rendered", () => {
        expect(appScreen().find(DialogTitle).length).toBe(1);
    });

    it("DialogActions is rendered", () => {
        expect(appScreen().find(DialogActions).length).toBe(1);
    });

    it("Buttons are rendered", () => {
        expect(appScreen().find(Button).length).toBe(1);
    });

});
