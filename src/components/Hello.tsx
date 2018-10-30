import * as React from 'react';
import './Hello.css';

export interface HelloProps {
    name: string;
    enthusiasmLevel: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class Hello extends React.PureComponent<HelloProps, any> {
    // if (enthusiasmLevel <= 0) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }

    public render() {
        if (this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.props.enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        );
    }

}

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
