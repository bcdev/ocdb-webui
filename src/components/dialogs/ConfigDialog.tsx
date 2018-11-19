import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Settings } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { ChangeEvent } from "react";


interface ConfigDialogProps {
    open: boolean;
    handleClickOpen: () => void;
    handleClose: () => void;

    apiServerUrlChange: (url: string) => void;
}


interface ConfigDialogState {
    url: string;
}


export default class ConfigDialog extends React.Component<ConfigDialogProps, ConfigDialogState> {
    handleApiServerUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        const v = event.target.value;
        this.setState({...this.state, url: v});
    };

    handleApiServerUrlSave = () => {
        this.props.apiServerUrlChange(this.state.url);
    };

    render() {
        return (
            <div>
                <IconButton color="inherit" onClick={this.props.handleClickOpen}>
                    <Settings/>
                </IconButton>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Settings</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Configure backend server address.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="server"
                            label="Backend Server"
                            type="text"
                            fullWidth
                            onChange={this.handleApiServerUrlChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleApiServerUrlSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}