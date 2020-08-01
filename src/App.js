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

    //function used to delete individual counter
    //Using filter() method we iterate through state 'counters' applying condition check for id
    //of each element of array which we receive through callback function from child component.
    //If id matches then count of this element is set to 0 update state 'counters' using setCountCustom function
    const deleteCount = (id) => {
        const updatedCounters = counters.filter(el => el.id !== id);
        setCounters(updatedCounters);
    }

    //function used to delete all counters
    //through function setCounters we change state 'counters' to empty array
    //had to add an additioanal state to show/hide buttons on the page when counter is deleted
    const deleteAll = () => {
        setCounters([]);
        setShowRangeCounter(false);
    }

    //created state range which si equal to 0 by default
    const [range, setRange] = useState(0)

    //created state to show/hide new content of child component when button is clicked
    const [showRangeCounter, setShowRangeCounter] = useState(false);

    //created state to keep range of buttons with default value empty array
    const [rangeOfBtns, setRangeOfBtns] = useState([]);

    //function which creates an array and writes it into state rangeOfBtns through setRangeOfBtns function
    const setRangeBtn = () => {
        const newRange = [];
        for (let i = 1; i <= range; i++) {
            newRange.push(i)
        }
        setRangeOfBtns(newRange);
    }

    //function which is called on click of Btn and
    const addWithRange = () => {
        setRangeBtn(); //passes the range of buttons
        setShowRangeCounter(true); //changes visibility of the child component content
        setRange(0); //resets input to 0 after each click on button
        setCountCustom(0); //resets ounter to 0 if new range is set
        setCustomCount(true); // changes state when counter is deleted
    }

    //function used to update custom counter value by value indicated on the button
    const changeCountCustom = (n) => {
        setCountCustom(countCustom + n);
    }

    //function used reset custom counter to 0
    const resetCustomCount = () => {
        setCountCustom(0);
    }

    //state for custom counter
    const [customCount, setCustomCount] = useState(true)

    //function to delete custom Counter
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
                            {/*input for custom counter which sets quantity of buttons*/}
                            <select className="custom-select custom-select-sm" id="inputGroupSelect04"
                                    aria-label="Example select with button addon" value={range}
                                    onChange={(e) => setRange(e.target.value)}>
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
                                {/*button to add range of buttons for custom counter*/}
                                <button className="btn btn-outline-info btn-sm" type="button" onClick={addWithRange}>Add
                                    Counter w/Range
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <CounterList
                    // pass countets to child component
                    counters={counters}
                    //pass increaseCount function to child component
                    increaseCount={increaseCount}
                    //pass decreaseCount function to child component
                    decreaseCount={decreaseCount}
                    //pass reset function to child component
                    resetCount={resetCount}
                    //pass delete function to child component
                    deleteCount={deleteCount}
                />
                {showRangeCounter && <CounterRangeBtn
                    //pass rangeOfBtns state to child component
                    rangeOfBtns={rangeOfBtns}
                    //pass countCustom state to child component
                    countCustom={countCustom}
                    //pass function to child component which calculates countCustom based on click button
                    changeCountCustom={changeCountCustom}
                    //pass reset custom counter function to child component
                    resetCustomCount={resetCustomCount}
                    //pass customCount state to child component which is responsible for child elements display on the screen
                    customCount={customCount}
                    //pass function to delete custom counter
                    deleteCustomCount={deleteCustomCount}
                />}
            </div>
        </div>
    );
}

export default App;
