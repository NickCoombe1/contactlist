import React, { Component } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Container, } from '@material-ui/core'
import CountContactLetterTable from '../components/CountContactLetterTable';
import CountContactLengthTable from '../components/CountContactLengthTable';

/** 
 * Parent Component that implements radio buttons to render either child depending on what's selected.
 */
class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: props.contactInfo,
            defaultValue: "Contact Information", //set default radio button
            showCountContactTable: true,
            showLengthContactTable: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => { //when radio button change do something
        if (event.currentTarget.value === "Contact Character Count") {
            this.setState({
                defaultValue: event.currentTarget.value,
                showCountContactTable: false,
                showLengthContactTable: true
            })
        }
        else {
            this.setState({
                defaultValue: event.currentTarget.value,
                showCountContactTable: true,
                showLengthContactTable: false
            })
        }
    };

    componentDidMount() {
        const { contactInfo } = this.props;
        this.setState({ contactInfo })
    }

    render() {
        return (
            <Container maxWidth="sm" style={{ marginLeft: "initial", padding: 20 }}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup aria-label="position" value={this.state.defaultValue} name="position" onChange={this.handleChange} row>
                        <FormControlLabel
                            value="Contact Information"
                            control={<Radio color="primary" />}
                            label="Contact Information"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="Contact Character Count"
                            control={<Radio color="primary" />}
                            label="Contact Character Count"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
                {this.state.showCountContactTable && <CountContactLetterTable contactInfo={this.state.contactInfo} />}
                {this.state.showLengthContactTable && <CountContactLengthTable contactInfo={this.state.contactInfo} />}
            </Container>
        )
    }
}

export default Reports;