import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 8
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleNote({ title, timestamp, seeMore }) {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {timestamp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={seeMore}>See More</Button>
            </CardActions>
        </Card>
    );
};


