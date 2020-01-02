import React, { Component } from 'react';
import  {Dialog} from '@material-ui/core'

class OpenBusinessCard extends Component {
    constructor(props){
        super(props)
        this.state={
            open: true
        }
    } //needs to be class as it needs to saveState

    close() {
        this.props.close()
    
    }
    render(){
        return(
            console.log("hello!")
            // <Dialog></Dialog>
        )
    }
}
// close(){
//     this.props.close();
// };
export default OpenBusinessCard;