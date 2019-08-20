import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function IconButtons() {
    const classes = useStyles();

    return (
        <div>
            <IconButton className={classes.button} aria-label="delete">
                <ArrowBackIcon />
            </IconButton>
        </div>
    );
}