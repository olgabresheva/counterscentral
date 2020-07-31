import React, {useState} from 'react'; //default import of react library
import './App.css'; //import of css file
import {uuid} from "uuidv4"; //import of random id generator
import CounterList from "./CounterList"; //import of child component
import "bootstrap/dist/css/bootstrap.min.css"; //import of bootstrap library
import CounterRangeBtn from "./CounterRangeBtn"; //import of child component

function App() {

    //random counter: array which comprises two values: state with default value equal to empty array and function which updates this state
    const [counters, setCounters] = useState([]);
    //custom counter: array which comprises two values: state with default value equal to empty array and function which updates this state
    const [countCustom, setCountCustom] = useState(0);

    //function which creates a random number by using Math.random method rounding to the whole number
    //random number is added to the state of random counter with a random id
    //update state 'counters' using setCountCustom function
    const randomCount = () => {
        const num = Math.round(Math.random() * 10);
        const updatedCounters = [...counters];
        updatedCounters.push({id: uuid(), count: num});
        setCounters(updatedCounters);
    }

    //function used to increase random counter by 1 step.
    //we create a copy of state 'counters'. Using map() method iterate through mew array applying condition check for id
    //of each element of array which we receive through callback function from child component. If id matches
    //then count of this element gets increased by one. Update state 'counters' using setCountCustom function
    const increaseCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: el.count + 1})
            else return el
        })
        setCounters(updatedCounters);
    }

    //function used to decrease random counter by 1 step.
    //we create a copy of state 'counters'. Using map() method iterate through mew array applying condition check for id
    //of each element of array which we receive through callback function from child component. If id matches
    //then count of this element gets decreased by one. Update state 'counters' using setCountCustom function
    const decreaseCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: el.count - 1})
            else return el
        })
        setCounters(updatedCounters);
    }

    //function used to reset individual count to 0
    //we create a copy of state 'counters'. Using map() method iterate through new array applying condition check for id
    //of each element of array which we receive through callback function from child component.
    // If id matches then count of this element is set to 0 update state 'counters' using setCountCustom function
    const resetCount = (id) => {
        const updatedCounters = counters.map(el => {
            if (el.id === id) return ({...el, count: 0})
            else return el
        })
        setCounters(updatedCounters);
    }

    //function used to reset count to 0 for all counters
    //we create a copy of state 'counters', using map() method iterate through new array updating value of count of each element to 0
    //update state 'counters' using setCountCustom function
    const resetAll = () => {
        const updatedCounters = [...counters];
        updatedCounters.map(el => el.count = 0)
        setCounters(updatedCounters);
        setCountCustom(0);
    }

    //function used to delete individual count to 0
    //Using filter() method we iterate through state 'counters' applying condition check for id
    //of each element of array which we receive through callback function from child component.
    // If id matches then count of this element is set to 0 update state 'counters' using setCountCustom function
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
    const [rangeOfBtns, setRangeOfBtns] = useState([]);
    // const [disabledAddBtn, setDisabledAddbtn] = useState(true);

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
        setRangeOfBtns(newRange);
    }


    const addWithRange = () => {
        setRangeBtn();
        setShowRangeCounter(true);
        setRange(0);
        setCountCustom(0);
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
                                    aria-label="Example select with button addon" value={range}
                                    onChange={setRangeEnableBtn}>
                                <option selected>Choose your range</option>
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
                                <button className="btn btn-outline-info btn-sm" type="button" onClick={addWithRange}>Add
                                    Counter w/Range
                                </button>
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
                    resetCustomCount={resetCustomCount}
                    customCount={customCount}
                    deleteCustomCount={deleteCustomCount}
                />}
            </div>
        </div>
    );
}

export default App;
