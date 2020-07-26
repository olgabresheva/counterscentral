import React, {useState} from 'react';
import './App.css';

function Counter(props) {

    const [removeCount, setRemoveCount] = useState(false);

    const deleteCount = () => {
        setRemoveCount(true);
    }

    return (

        <div className="Counter">

                <button onClick={() => props.decreaseCount(props.id)}>-</button>
                <span className="count">{props.count}</span>
                <button onClick={() => props.increaseCount(props.id)}>+</button>
                <button onClick={() => props.resetCount(props.id)}>Reset</button>
                <button onClick={deleteCount}>Delete</button>

        </div>
    );
}

export default Counter;
