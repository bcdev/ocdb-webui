import * as React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import Icon from '@material-ui/core/Icon/Icon';
import SimpleTable from '../SimpleTable';
import SearchMap from '../../containers/SearchMap';
import { DatasetQuery } from '../../api';


interface PanelSearchProps extends DatasetQuery {
    classes: any;
    show: boolean;
    searchDatasets: () => void;
}


class PanelSearch extends React.PureComponent<PanelSearchProps> {
    constructor(props: PanelSearchProps) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        if (!this.props.show) {
            return null;
        }

        return (
            <div className={this.props.show ? '' : classes.hidden}>
                <Grid spacing={24} container direction={'row'} justify={'flex-start'}>
                    <Grid item xs={12} container direction={'row'} alignItems={'baseline'}>
                        <Grid container spacing={8}>
                            <Grid item xs={2}>
                                <TextField
                                    id={'lucene-search'}
                                    label={'Search'}
                                    variant="outlined"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="measurement-from-date"
                                    label="Measured From:"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="measurement-to-date"
                                    label="To"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        onClick={this.props.searchDatasets}>
                                    Search
                                    <Icon className={classes.rightIcon}>search</Icon>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.tableContainer}>
                            <SimpleTable/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.tableContainer}>
                            <SearchMap/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default PanelSearch;