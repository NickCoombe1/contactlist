import React, { Component} from 'react';

class DisplayContacts extends Component {
    constructor(){
        super();
        this.state = {
            contactInfo: []      //empty array to hold retrieved info    
        };
    }

componentDidMount(){
    let url = 'http://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res =>  res.json())
    .then(data => this.setState({ contactInfo: data})) //save response data into array intialised before

}


render() {
    const {contactInfo} = this.state; 
    console.log("state", this.state.contactInfo);
    return(
        <div>
            {contactInfo.name}
        </div>

    )

    }
}

export default DisplayContacts