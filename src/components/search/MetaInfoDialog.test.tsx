import * as React from 'react';

import createMount from "@material-ui/core/test-utils/createMount";
import { Dialog } from "@material-ui/core";

import MetaInfoDialog from "./MetaInfoDialog";
import { Dataset, datasetInit } from "../../types/dataset";
// import * as renderer from "react-test-renderer";


interface MockMetaInfoDialogProps {
    open: boolean;
    dataset: Dataset;

    handleClose: () => void;
}


function initMockProps(){
    return {
        open: true,
        dataset: datasetInit,
        handleClose: () => null,
    };
}


describe('<MetaInfoDialog />', () => {
    let props: MockMetaInfoDialogProps;

    let mount = createMount();

    beforeEach(() => {
        mount = createMount();
        props = initMockProps();
    });

    afterEach(()=>{
        mount.cleanUp();
    });

    // Cannot run due to a bug in Modal
    /*it('renders correctly', () => {
        let props: MockMetaInfoDialogProps = initMockProps();

        const tree = renderer.create(
            <MetaInfoDialog {...props} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });*/

    it('renders Dialog', () => {
        const wrapper = mount(<MetaInfoDialog {...props} />);

        expect(wrapper.find(Dialog).length).toBe(1);
    });
});