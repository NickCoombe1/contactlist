import React, { Component } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Container, } from '@material-ui/core'
import ContactTable from '../components/ContactTable';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: props.contactInfo,
            defaultValue: "Contact Information", //set default radio button
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => { //when radio button change do something
        this.setState({
            defaultValue: event.currentTarget.value
        })

      };

    componentDidMount(){ 
        const {contactInfo} = this.props;
        this.setState({contactInfo})
    }

    render() {
        return (
            <Container maxWidth="xs" style={{marginLeft: "initial", padding: 20}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup aria-label="position" value ={this.state.defaultValue} name="position" onChange={this.handleChange} row>
                        <FormControlLabel
                            value="Contact Information"
                            control={<Radio color="primary" />}
                            label="Contact Information"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="Report 2"
                            control={<Radio color="primary" />}
                            label="Report 2"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
                <ContactTable contactInfo={this.state.contactInfo} />
            </Container>
        )
    }
}

export default Reports;