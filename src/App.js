import React, {useState} from 'react';
import './App.css';
import {uuid} from "uuidv4";
import CounterList from "./CounterList";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterRangeBtn from "./CounterRangeBtn";

function App() {

    const [counters, setCounters] = useState([]);

    const randomCount = () => {
        const num = Math.round(Math.random() * 10);
        const updatedCounters = [...counters];
        updatedCounters.push({id: uuid(), count: num});
        setCounters(updatedCounters);
    }

    const increaseCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: el.count + 1})
            else return el
        })
        setCounters(updatedCounters);
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

    const resetAll = () => {
        const updatedCounters = [...counters];
        updatedCounters.map(el => el.count = 0)
        setCounters(updatedCounters);
    }

    const deleteCount = (id) => {
        const updatedCounters = counters.filter(el => el.id !== id);
        setCounters(updatedCounters);
    }

    //const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [range, setRange] = useState('')
    const [showRangeCounter, setShowRangeCounter] = useState(false);
    const [num, setNum] = useState([])

    const rangeSetNum = (range) => {
        const newRange = [];
        for (let i = 1; i <= range; i++) {
            newRange.push(i)
        }
        setNum(newRange);
        console.log(newRange)
    }

    const addWithRange = () => {
        setShowRangeCounter(true);
        rangeSetNum();
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-outline-info btn-sm" onClick={randomCount}>Add Counter</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={resetAll}>Reset All</button>
                    </div>
                    {/*<div className="col-md-4 offset-md-4">*/}
                    {/*    <div className="input-group mb-3 input-group-sm">*/}
                    {/*        <input type="number" className="form-control" placeholder="Add your range"*/}
                    {/*               value={range} onChange={e => setRange(e.target.value)}/>*/}
                    {/*        <div className="input-group-append">*/}
                    {/*            <button className="btn btn-outline-info btn-sm" type="button"*/}
                    {/*                    id="button-addon2" onClick={addWithRange}>Add Counter*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <CounterList counters={counters}
                             increaseCount={increaseCount}
                             decreaseCount={decreaseCount}
                             resetCount={resetCount}
                             deleteCount={deleteCount}
                />
                {/*{showRangeCounter && <CounterRangeBtn num={num}/>}*/}
            </div>
        </div>
    );
}

export default App;
