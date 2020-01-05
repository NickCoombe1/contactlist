import React, { Component } from 'react';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core'



class CountContactLengthTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactInfo: props.contactInfo,
            charCount: {}, //object to hold char/name pairs
        }
        this.retrieveTableData = this.retrieveTableData.bind(this);
    }

componentDidMount(){
    const { contactInfo } = this.props;
    this.setState({ contactInfo }) //call this on rerender
    this.retrieveTableData();
}

retrieveTableData(){
    this.state.contactInfo.map(item =>{
        const contactLength = item.name.length;
        this.state.charCount[item.name] = contactLength;
    })
    console.log(this.state.charCount)
}

render(){
    return (
        <TableContainer component={Paper} style={{width:'90%', marginTop: 20}}>
            <Table size="small" aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Length of Name:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.charCount && Object.entries(this.state.charCount).map(([keyName, value]) => {
                        return(
                        <TableRow key={keyName}>
                            <TableCell align="left">
                                {keyName}
                            </TableCell>
                            <TableCell align="right">
                                {value}
                            </TableCell>
                        </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )}

}

export default CountContactLengthTable;