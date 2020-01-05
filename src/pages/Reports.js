import React, { Component } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Container, } from '@material-ui/core'
import ContactTable from '../components/ContactTable';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: props.contactInfo,
            defaultValue: "Report 1",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
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
            <Container maxWidth="lg" style={{marginLeft: "initial", padding: 20}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup aria-label="position" value ={this.state.defaultValue} name="position" onChange={this.handleChange} row>
                        <FormControlLabel
                            value="Report 1"
                            control={<Radio color="primary" />}
                            label="Report 1"
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