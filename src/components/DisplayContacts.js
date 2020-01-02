import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "100%",
        width: "300px",
    },
    root: {
        direction: "row",
        alignItems: "stretch",
        flex: "row",

    }

});




const DisplayContacts = ({contactInfo}) => {
        const classes = useStyles();
        console.log("state", contactInfo); //delete this
        return (
            <div className="home" style={{padding: 20}}>
                <Grid spacing={2}>
                    <Grid item xs={12}>
                        <Grid container className={classes.root} justify ="center" spacing={5}>
                            {contactInfo.map(contact => {
                                const { id, name, email, phone, company } = contact; //map data we need for cards 
                                return (
                                    <Grid key={id} item>
                                        <Card className={classes.card} >
                                            <CardContent>
                                                <Typography variant="h5">
                                                    {name}
                                                </Typography>
                                                <Typography variant="h6">
                                                    {email}
                                                </Typography>
                                                <Typography variant="h6">
                                                    {phone}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )

    }


export default DisplayContacts;