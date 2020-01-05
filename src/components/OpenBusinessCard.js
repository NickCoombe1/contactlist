import React, { Component } from 'react';
import { Dialog, Button } from '@material-ui/core'
import logo from '../static/businessCardBackground.png';

class OpenBusinessCard extends Component { //needs to be class as it needs to saveState of open
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }
    componentDidMount() { //draw Image on Canvas once created
        this.updateCanvas();
    }

    updateCanvas() {
        const img = new Image();
        img.src = logo;
        img.onload = () => { //wait for image to load
            //draw background
            this.context.drawImage(img, 0, 0, 600, 300);
            //name  
            this.context.font = '30px bold Arial Black';
            this.context.fillStyle = "#ffffff";
            this.context.textAlign = "center";
            this.context.fillText(this.props.selectedContact.name, 300, 100);
            //underline
            const text = this.context.measureText(this.props.selectedContact.name);
            this.context.strokeStyle = '#ffffff';
            this.context.beginPath();
            this.context.lineTo(300 - (text.width / 3), 110);
            this.context.lineTo(300 + (text.width / 3), 110);
            this.context.stroke();
            //business name
            this.context.font = '25px bold Roboto';
            this.context.textAlign = "center";
            this.context.fillText(this.props.selectedContact.company.name, 300, 135);
            //phone number
            this.context.font = '20px  Roboto';
            this.context.textAlign = "left";
            this.context.fillText('PH: ' + this.props.selectedContact.phone, 80, 200);
            //email   
            this.context.font = '20px  Roboto';
            this.context.textAlign = "left";
            this.context.fillText('@: ' + this.props.selectedContact.email, 80, 225);
            //website
            this.context.font = '20px  Roboto';
            this.context.textAlign = "left";
            this.context.fillText('URL: ' + this.props.selectedContact.website, 80, 250);
        }
    }

    close() {
        this.props.close();
    }
    render() {
        return (

            <Dialog
                modal={"false"}
                open={this.state.open}>
                <div>
                    <canvas ref={(c => c && (this.context = c.getContext('2d')))} width={600} height={300} />
                </div>
                <Button label="close" onClick={this.close.bind(this)}>Close</Button>
            </Dialog>
        )
    }
}

export default OpenBusinessCard;