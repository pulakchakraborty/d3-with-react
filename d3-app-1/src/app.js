import React, { Component } from 'react';
import BarChart from './components/BarChart';
import './styles/App.css';
import WorldMap from './components/WorldMap';

class App extends Component {
    render() {
        return(
            <div className="App">
                <div className="App-header">
                    <h3>Dashboard using D3</h3>
                </div>
                <BarChart data={[5,10,1,3]} size={[500,500]} />
                <WorldMap />
            </div>
        );
    }
}

export default App;
