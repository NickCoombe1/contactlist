import React, { Component } from 'react';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core'



class CountContactLetterTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactInfo: props.contactInfo,
            letterCount: {},
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
        const firstLetter = item.name.slice(0,1);
        (firstLetter in this.state.letterCount) ? this.state.letterCount[firstLetter] += 1 : this.state.letterCount[firstLetter] = 1; //add to count if letter already in object

    })
}

render(){
    return (
        <TableContainer component={Paper} style={{width:'90%', marginTop: 20}}>
            <Table size="small" aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Letter</TableCell>
                        <TableCell>Number of contacts starting with:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.letterCount && Object.entries(this.state.letterCount).map(([keyName, value]) => {
                        return(
                        <TableRow key={keyName}>
                            <TableCell align="left">
                                {keyName}
                            </TableCell>
                            <TableCell align="left">
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

export default CountContactLetterTable;