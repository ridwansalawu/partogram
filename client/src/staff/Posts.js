import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ACTIONS from '../store/actions/actions'

import Axios from 'axios';

import Button from '@material-ui/icons/core/Button';
import Table from '@material-ui/icons/core/Table';
import TableBody from '@material-ui/icons/core/TableBody';
import TableCell from '@material-ui/icons/core/TableCell';
import TableHead from '@material-ui/icons/core/TableHead';
import TableRow from '@material-ui/icons/core/TableRow';
import Paper from '@material-ui/icons/core/Paper';

class Posts extends Component {
    render() {
        return (
            <div>
                <h1>Post</h1>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Title
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {}
                        </TableBody>
                    </Table>
                </Paper>
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    posts: state.posts
}

export default connect(mapStateToProps)(Posts);
