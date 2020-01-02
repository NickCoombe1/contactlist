import React, { Component } from 'react';
import  {Dialog, TextField, DialogTitle, Button} from '@material-ui/core'

class OpenBusinessCard extends Component { //needs to be class as it needs to saveState
    constructor(props){
        super(props)
        this.state={
            open: true
        }
    } 

    close(){
        this.props.close();
    }
    render(){// needs an image added
        const {id} = this.props;
        console.log(this.props)
        return(
            
            <Dialog
            modal= {"false"}
            open = {this.state.open}>
                <DialogTitle>Display Photo:{id}</DialogTitle> 
                <Button label="close" onClick={this.close}>Close</Button>
            </Dialog>
        )
    }
}

export default OpenBusinessCard;