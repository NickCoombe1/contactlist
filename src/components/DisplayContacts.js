import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Grid, ButtonBase } from '@material-ui/core';
import OpenBusinessCard from './OpenBusinessCard';



class DisplayContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: [],
            isLoading: false,
            selectedId: 0,

        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        let url = 'http://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ contactInfo: data, isLoading: false })) //save response data into array intialised before
            .catch((error) => {
                alert("Error when fetching API data, please try again.");
            });

    }
    render() {
        return (
            <div className="home" style={{ padding: 20 }}>
                <Grid spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            {this.state.showBusinessCard && <OpenBusinessCard close={() => this.setState({ showBusinessCard: false })} selectedId={this.state.selectedId} />}
                            {this.state.contactInfo.map(contact => {
                                const { id, name, email, phone, company } = contact; //map data we need for cards 
                                return (
                                    <Grid key={id} item>
                                        <Card style={{ height: "100%", width: "300px" }} >
                                            <ButtonBase onClick={() => this.setState({ showBusinessCard: true, selectedId: id })}
                                            >

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

        )
    }
}


export default DisplayContacts;