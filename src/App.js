import React, {useState} from 'react';
import './App.css';
import {uuid} from "uuidv4";
import CounterList from "./CounterList";

function App() {

    const initialCounters = [
        {id: uuid(), count: 4},
        {id: uuid(), count: 34},
        {id: uuid(), count: 5},
    ]

    const [counters, setCounters] = useState([]);

    const randomCount = () => {
        const num = Math.round(Math.random() * 10);
        const updatedCounters = [...counters];
        updatedCounters.push({id: uuid(), count: num});
        setCounters(updatedCounters);
    }

    const increaseCount = (id) => {
        //console.log(id);
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: el.count + 1})
            else return el
        })
        setCounters(updatedCounters)
    }

    const decreaseCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: el.count - 1})
            else return el
        })
        setCounters(updatedCounters);
    }

    const resetCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: 0})
            else return el
        })
        setCounters(updatedCounters);
    }

    const resetAllCounters = () => {
        const updatedCounters = counters.map(el => el.count * 0);
        setCounters(updatedCounters);
    }

    return (
        <div className="App">
            <div className="container">

                <button onClick={randomCount}>Add Counter</button>
                <button onClick={resetAllCounters}>Reset All</button>
                <hr/>
                <CounterList counters={counters}
                             increaseCount={increaseCount}
                             decreaseCount={decreaseCount}
                             resetCount={resetCount}
                />
            </div>
        </div>
    );
}

export default App;
