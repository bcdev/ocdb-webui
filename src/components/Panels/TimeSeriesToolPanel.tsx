import * as React from 'react';
import '../Styles.css';
import './TimeSeriesToolPanel.css';

export class TimeSeriesToolPanel extends React.PureComponent<any, any> {

    public render() {
        return (
            <div className='time-series-tool-panel'>
                <span>Time Series Tool</span>
            </div>
        )
    }
}