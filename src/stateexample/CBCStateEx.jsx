import React, { Component } from 'react';

class CBCStateEx extends Component {
    constructor(){
        super();
        this.state = {
            users:["Manoj","Vamshi","Prabhas","Yashwanth"],
            num:1000
        };
    }

    changeNumber = () => {
        this.setState({num:2000});
    }

    resetNumber = () => {
        this.setState({num:1000});
    }

    render() {
        console.log(this);
        return (
            <div>
                {
                    this.state.users.map((user, index) => {
                        return <li key={index}>{user}</li>
                    })
                }
                <h2>{this.state.num}</h2>
                <button onClick={this.changeNumber} style = {{color:'green'}}>Change Number</button>
                <button onClick={this.resetNumber} style = {{color:'red'}}>Reset</button>
            </div>
        );
    }
}

export default CBCStateEx;
