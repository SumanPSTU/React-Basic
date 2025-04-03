import React, { Component } from 'react';

export default class Props extends Component {

    
    render() {
        const click =(event)=>{
            event.preventDefault();
            alert("Submit successful !!")
        };
        return (
            <div>
                <ul style={{display:'flex',alignItems:'center',gap:'4px',listStyle:'none'}}>
                    <li>{this.props.title['name']}</li>
                    <li>{this.props.title['age']}</li>
                    <li>{this.props.title['id']}</li>
                </ul>

                <div>
                    <form onSubmit={click}  action="">
                        <input type="text" name="name" placeholder="Enter your name"/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}