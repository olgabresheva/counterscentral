import React from 'react';
import './App.css';
import Counter from "./Counter";

function CounterList(props) {

    return (
        <div className="CounterList">
            {props.counters.map(el =>
                <Counter
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
