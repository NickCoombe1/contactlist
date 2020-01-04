import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, ButtonBase } from '@material-ui/core';
import OpenBusinessCard from './OpenBusinessCard';
import NavBar from './NavBar';


class DisplayContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: [],
            isLoading: false,
            selectedId: 0,

        }
    }
    // componentDidMount() {
    //     this.setState({ isLoading: true });
    //     let url = 'http://jsonplaceholder.typicode.com/users'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => this.setState({ contactInfo: data, isLoading: false })) //save response data into state array intialised before
    //         .catch((error) => {
    //             alert("Error when fetching API data, please try again.");
    //         });

    // }
    render() {
        this.state.contactInfo = this.props.contactInfo
        return (
            <div >
                <NavBar header="Contact List" contactInfo ={this.state.contactInfo}  />
                <div className="home" style={{padding: 20}}>
                <Grid spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            {this.state.showBusinessCard && <OpenBusinessCard close={() => this.setState({ showBusinessCard: false })} selectedContact={this.state.selectedContact} />}
                            {this.state.contactInfo.map(contact => {
                                const { id, name, email, phone, company } = contact; //map data we need for cards 
                                return (
                                    <Grid key={id} item>
                                        <Card style={{ height: "100%", width: "300px" }} >
                                            <ButtonBase style={{width: "100%"}} onClick={() => this.setState({ showBusinessCard: true, selectedId: id, selectedContact: contact })} //set selected card data 
                                            >

                                                <CardContent>
                                                    <Typography variant="h5" aligh="center">
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="h7"aligh="center" >
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
            </div>

        )
    }
}


export default DisplayContacts;