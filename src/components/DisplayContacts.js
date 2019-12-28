import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    card: {
        width: "100",
        height: "100",

    },
    gridRoot: {
        direction: "row",
        justify: "center",
        alignItems: "stretch",
        flex: "row",

    }

});

class DisplayContacts extends Component {
    constructor() {
        super();
        this.state = {
            contactInfo: []      //empty array to hold retrieved info    
        };
    }

    componentDidMount() {
        let url = 'http://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json()) //ERROR HANDLING
            .then(data => this.setState({ contactInfo: data })) //save response data into array intialised before

    }



    render() {
        const { contactInfo } = this.state;
        console.log("state", this.state.contactInfo); //delete this
        const {classes} = this.props;
        return (
            <div className="home" style={{padding: 20}}>
                <Grid spacing={2}>
                    <Grid item xs={12}>
                        <Grid container className= {classes.gridRoot} spacing={2}>
                            {this.state.contactInfo.map(contact => {
                                const { id, name, email, phone, company } = contact; //map data we need for cards 
                                return (
                                    <Grid key={id} item>
                                        <Card className={classes.card}>
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
}
DisplayContacts.propTypes = { //fixes invalid hook calls
    classes: propTypes.object.isRequired,
};

export default withStyles(useStyles)(DisplayContacts);