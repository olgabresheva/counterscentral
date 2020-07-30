import React, {useState} from 'react';
import './App.css';
import {uuid} from "uuidv4";
import CounterList from "./CounterList";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterRangeBtn from "./CounterRangeBtn";
// import {Alert} from "react-bootstrap";

function App() {

    const [counters, setCounters] = useState([]);
    const [countCustom, setCountCustom] = useState(0);

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
        setCountCustom(0);
    }

    const deleteCount = (id) => {
        const updatedCounters = counters.filter(el => el.id !== id);
        setCounters(updatedCounters);
    }

    const deleteAll = () => {
        setCounters([]);
        setShowRangeCounter(false);
    }

    const [range, setRange] = useState(0)
    const [showRangeCounter, setShowRangeCounter] = useState(false);
    const [rangeOfBtns, setRangeOfBtns] = useState([[]]);
    const [indexBtn, setIndexBtn] = useState(0);
    // const [disabledAddBtn, setDisabledAddbtn] = useState(true);
    // const [showAlert, setShowAlert] = useState(false)

    const setRangeEnableBtn = (e) => {
        setRange(e.target.value);
        // if (range > 0) {setDisabledAddbtn(false)}
        // else setDisabledAddbtn(true)
    }

    const setRangeBtn = () => {
        const newRange = [];
        for (let i = 1; i <= range; i++) {
            newRange.push(i)
        }
        const updatedRangeOfBtns = [...rangeOfBtns];
        updatedRangeOfBtns.push(newRange);
        setRangeOfBtns(updatedRangeOfBtns);
    }

    const addWithRange = () => {
        setRangeBtn();
        setShowRangeCounter(true);
        setIndexBtn(indexBtn + 1);
        setRange(0);
        setCountCustom(0);
        // setDisabledAddbtn(true);
        setCustomCount(true);
    }

    const changeCountCustom = (n) => {
        setCountCustom(countCustom + n);
    }

    const resetCustomCount = () => {
        setCountCustom(0);
    }

    const [customCount, setCustomCount] = useState(true)

    const deleteCustomCount = () => {
        setCustomCount(false);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-outline-info btn-sm" onClick={randomCount}>Add Counter</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={resetAll}>Reset All</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={deleteAll}>Delete All</button>
                    </div>
                    <div className="col-md-4 offset-md-4">
                        {/*<div className="input-group mb-3 input-group-sm">*/}
                        {/*    <input type="number" className="form-control" placeholder="Add your range"*/}
                        {/*           value={range} onChange={setRangeEnableBtn}/>*/}
                        {/*    <div className="input-group-append">*/}
                        {/*        <button className="btn btn-outline-info btn-sm" type="button"*/}
                        {/*                id="button-addon2" disabled={disabledAddBtn} onClick={addWithRange}>Add Counter*/}
                        {/*            w/Range*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    /!*{showAlert && <Alert variant="secondary">Please use positive values</Alert>}*!/*/}
                        {/*</div>*/}
                        <div className="input-group">
                            <select className="custom-select custom-select-sm" id="inputGroupSelect04"
                                    aria-label="Example select with button addon" value={range} onChange={setRangeEnableBtn}>
                                <option selected>Choose you range</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-outline-info btn-sm" type="button" onClick={addWithRange}>Add Counter w/Range</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CounterList counters={counters}
                             increaseCount={increaseCount}
                             decreaseCount={decreaseCount}
                             resetCount={resetCount}
                             deleteCount={deleteCount}
                />
                {showRangeCounter && <CounterRangeBtn
                    rangeOfBtns={rangeOfBtns}
                    countCustom={countCustom}
                    changeCountCustom={changeCountCustom}
                    indexBtn={indexBtn}
                    resetCustomCount={resetCustomCount}
                    customCount={customCount}
                    deleteCustomCount={deleteCustomCount}
                />}
            </div>
        </div>
    );
}

export default App;
