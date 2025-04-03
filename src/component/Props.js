import React, { Component } from 'react';

export default class Props extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.title['name']}</li>
                    <li>{this.props.title['age']}</li>
                    <li>{this.props.title['id']}</li>
                </ul>
            </div>
        );
    }
}