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
    console.log(this.state.letterCount)
    console.log("rendering")
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Letter</TableCell>
                        <TableCell>Number of Contacts</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.letterCount && Object.entries(this.state.letterCount).map(([keyName, value]) => {
                        return(
                        <TableRow>
                            <TableCell>
                                {keyName}
                            </TableCell>
                            <TableCell>
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