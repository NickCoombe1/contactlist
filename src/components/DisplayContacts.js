import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Grid, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OpenBusinessCard from './OpenBusinessCard';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

const styles = makeStyles({
    card: {
        height: "100%",
        width: "300px",
    },
    root: {
        direction: "row",
        alignItems: "stretch",
        flex: "row",
    },
    cardButton: { //makes card look clickable
        display: "block",
        textAlign: "initial"
    }

});




class DisplayContacts extends Component{
    constructor(props){
        super(props);
        this.state= {
            contactInfo: [],

        }
    }
    componentDidMount() {
        this.setState({isLoading: true});
        let url = 'http://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json()) 
            .then(data => this.setState({ contactInfo: data, isLoading: false })) //save response data into array intialised before
            .catch((error) => {
              alert("Error when fetching API data, please try again.");
            });
            
    }
        // const classes = useStyles();
        // console.log("state", contactInfo); //delete this
        render(){
            const {classes} = this.props;

        return (
            <div className="home" style={{padding: 20}}>
                <Grid spacing={2}>
                    <Grid item xs={12}>
                        <Grid container className={classes.root} justify ="center" spacing={5}>
                            {this.state.contactInfo.map(contact => {
                                const { id, name, email, phone, company } = contact; //map data we need for cards 
                                return (
                                    <Grid key={id} item>
                                        <Card className={classes.card} >
                                            <ButtonBase className={classes.cardButton} onClick={()=> this.setState({showBusinessCard: true})}
                                            > 
                            {this.state.showBusinessCard && <OpenBusinessCard close={() => this.setState({showBusinessCard:false})}/> }
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
                                                <Typography variant="h6">
                                                    {company.name}
                                                </Typography>
                                            </CardContent>
                                            </ButtonBase>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )}
                        }

export default withStyles(styles)(DisplayContacts);