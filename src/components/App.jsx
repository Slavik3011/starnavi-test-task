import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
	componentDidMount() {
		axios.get('/api')
	}

    render() {
        return (
            <div>
                <h1>Hello world!!</h1>
            </div>
        )
    }
}

