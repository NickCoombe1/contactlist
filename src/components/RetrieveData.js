import React, { Component} from 'react';

class RetrieveData extends Component {
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
    .then(data => this.setState({ contactInfo: data}))

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

export default RetrieveData