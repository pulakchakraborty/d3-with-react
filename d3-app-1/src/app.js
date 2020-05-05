import React, { Component } from 'react';
import BarChart from './components/BarChart';
import './app.css';

class App extends Component {
    render() {
        return(
            <div className="app">
                <h3>Dashboard using D3</h3>
                <BarChart data={[5,10,1,3]} size={[500,500]} />
            </div>
        );
    }
}

export default App;
