import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BBoxInput from "./BBoxInput";


interface BBoxInputProps{
    onBBoxChange: (left: number, bottom: number, right: number, top: number) => void;
    left: number;
    bottom: number;
    right: number;
    top: number;
}


describe('<BBoxInput />', () => {
    it('renders correctly', () => {
        let props: BBoxInputProps = {
            onBBoxChange: () => null,
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
        };

        const tree = renderer.create(
            <BBoxInput {...props} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
