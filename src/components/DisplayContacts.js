import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, ButtonBase, TextField } from '@material-ui/core';
import OpenBusinessCard from './OpenBusinessCard';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';

class DisplayContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: [],
            selectedId: 0,
            input: '',
            filtered: []

        }
    }


    filterList(inputValue){
        console.log("input"+inputValue)
        const {contactInfo} = this.state;
        this.setState({
            filtered: contactInfo.filter(item =>
                item.name.includes(inputValue))
        });
        console.log(this.state.filtered)

    }

    

    render() {
        this.state.contactInfo = this.props.contactInfo;
        this.state.filtered = this.props.contactInfo;
        return (
            <div >
                <div >
                    <div  >
                        <SearchIcon
                            style={{
                                position: 'absolute',
                                padding: "20px",
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} />
                    </div>
                    <Autocomplete
                        onChange={(event,value) => this.filterList(value)} //do something with selected value
                        id="searchBar"
                        freeSolo
                        style={{ width: '80%', padding: "20px" }}
                        options={this.state.contactInfo.map(contact => contact.name)}
                        renderInput={params => (
                            <TextField {...params} style={{ width: '25%', paddingLeft: "30px" }} />

                        )}
                    />
                </div>
                <div className="home" style={{ padding: 20 }}>
                    <Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                                {this.state.showBusinessCard && <OpenBusinessCard close={() => this.setState({ showBusinessCard: false })} selectedContact={this.state.selectedContact} />}
                                {this.state.contactInfo.map(contact => {
                                    const { id, name, company } = contact; //map data we need for cards 
                                    return (
                                        <Grid key={id} item>
                                            <Card style={{ height: "100%", width: "300px" }} >
                                                <ButtonBase style={{ width: "100%" }} onClick={() => this.setState({ showBusinessCard: true, selectedId: id, selectedContact: contact })} //set selected card data 
                                                >

                                                    <CardContent>
                                                        <Typography variant="h5" aligh="center">
                                                            {name}
                                                        </Typography>
                                                        <Typography variant="h6" aligh="center" >
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