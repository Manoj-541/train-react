import React, { Component } from 'react';

class CBCPropEX extends Component {
    render() {
        console.log(this);
        return (
            <div className='prop'>CBCPropEx
                <h1>{this.props.username}</h1>
                <h1>{this.props.age}</h1>
                {
                    this.props.hobbies.map(hobby=>{
                        return <li>{hobby}</li>
                    })
                }
                <h3>{this.props.address.city}</h3>
                <h3>{this.props.address.area}</h3>
                <button onClick={this.props.sendFun}>Click</button>
            </div>
        );
    }
}

export default CBCPropEX;
