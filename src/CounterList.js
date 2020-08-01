import React from 'react';
import './App.css';
import Counter from "./Counter";

function CounterList(props) {

    return (
        <div className="CounterList">
            {/*iterate through state 'Counters' (array of numbers) what allows to display a new counter
            on the page when button is clicked*/}
            {props.counters.map(el =>
                <Counter
                    //pass props to child component
                    key={el.id}
                    count={el.count}
                    id={el.id}
                    increaseCount={props.increaseCount}
                    decreaseCount={props.decreaseCount}
                    resetCount={props.resetCount}
                    deleteCount={props.deleteCount}/>)}
        </div>
    );
}

export default CounterList;
