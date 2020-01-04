import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div>
                <NavBar header="Reports" contactInfo ={this.props.contactInfo}/>
            </div>
        )
    }
}

export default Reports;