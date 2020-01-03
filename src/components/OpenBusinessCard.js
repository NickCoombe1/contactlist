import React, { Component } from 'react';
import  {Dialog, DialogTitle, Button} from '@material-ui/core'
import {createCanvas, loadImage} from 'canvas';
import logo from './businessCardBackground.jpg';

class OpenBusinessCard extends Component { //needs to be class as it needs to saveState of open
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
        const {selectedId} = this.props;
        this.canvas = createCanvas(600,300);
        this.ctx = this.canvas.getContext('2d')
        loadImage('./businessCardBackground.jpg').then((image) => { //wait while image loads
        // loadImage('../static/businessCardBackground.jpg').then((image) =>{ //wait while image loads
            this.ctx.drawImage(image, 0,0, this.canvas.width, this.canvas.height);
            console.log(logo)
        })
        return(
            
            <Dialog
            modal= {"false"}
            open = {this.state.open}>
                <DialogTitle>Display Photo:{selectedId}</DialogTitle> 
                <div > 
                <img src = {this.canvas.toDataURL()} alt="logo"/>
                </div>
                <Button label="close" onClick={this.close.bind(this)}>Close</Button>
            </Dialog>
        )
    }
}

export default OpenBusinessCard;