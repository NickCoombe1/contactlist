import React, { Component } from 'react';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core'



class ContactTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactInfo: props.contactInfo,
            letterCount: {},
        }
        this.retrieveTableData = this.retrieveTableData.bind(this);
    }

componentDidMount(){
    this.retrieveTableData();
}

retrieveTableData(){
    this.state.contactInfo.map(item =>{
        const firstLetter = item.name.slice(0,1);
        (firstLetter in this.state.letterCount) ? this.state.letterCount[firstLetter] += 1 : this.state.letterCount[firstLetter] = 1; //add to count if letter already in object

    })
}

render(){
    return (
        <TableContainer component={Paper} style={{width:'70%'}}>
            <Table size="small" aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Letter</TableCell>
                        <TableCell>Contacts starting with:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.letterCount && Object.entries(this.state.letterCount).map(([keyName, value]) => {
                        return(
                        <TableRow key={keyName}>
                            <TableCell align="center">
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

export default ContactTable;