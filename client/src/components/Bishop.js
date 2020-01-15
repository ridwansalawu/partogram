import React, { Component } from 'react';
import './Bishop.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default class Bishop extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         age: "",
         setOpen: false,
         open: false,
      };
    };

    handleClickOpen = () => {
        this.setState({open: true});
      };

    handleClose = () => {
        this.setState({open: false});
        
      };

    handleChange = event => {
        this.setState({age: event.target.value});
      };



    





    render() {
        return (
            <div>

            <div id="material-ui">
                                <Button onClick={this.handleClickOpen}>Calculate the Bishop Score</Button>
                                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose} >
                                    <DialogTitle>Fill the form</DialogTitle>
                                        <DialogContent>
                                            <form className="form-container">
                                                <FormControl className="form-control">
                                                <span>
                                                <InputLabel>Age</InputLabel>
                                                  <Select
                                                        
                                                       
                                                        value={this.state.age}
                                                        onChange={this.handleChange}
                                                        input={<Input />}
                                                    >
                                                        <MenuItem value="">
                                                        <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    <InputLabel>gggggggggggg</InputLabel>
                                                    <Select
                                                       
                                                        value={this.state.age}
                                                        onChange={this.handleChange}
                                                        input={<Input />}
                                                    >
                                                        <MenuItem value="">
                                                        <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </span> 

                                                </FormControl>

                                            </form>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary">Cancel </Button>
                                            <Button onClick={this.handleClose} color="primary"> Ok</Button>

                                        </DialogActions>

                                </Dialog>

                                

                            </div>
                
            </div>
        )
    }
}
