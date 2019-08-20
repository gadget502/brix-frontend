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

export default function SimpleNote({ title, timestamp }) {
    const classes = useStyles();

    var e = (x) => {
        x = String(x);
        return (x.length == 1) ? ('0' + x) : (x);
    };

    var d = new Date(Number(timestamp));
    var str_timestamp = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" +
        d.getDate() + " " + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds());
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
                <Button size="small">See More</Button>
            </CardActions>
        </Card>
    );
};


