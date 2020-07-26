import React, {useState} from 'react';
import './App.css';

function Counter(props) {

    const [btnHidden, setbtnHidden] = useState(false);

    const deleteCount = () => {
        props.deleteCount(props.id);
        setbtnHidden(true);
    }

    return (

        <div className="Counter">

            <button hidden={btnHidden} onClick={() => props.decreaseCount(props.id)}>-</button>
            <span className="count">{props.count}</span>
            <button hidden={btnHidden} onClick={() => props.increaseCount(props.id)}>+</button>
            <button hidden={btnHidden} onClick={() => props.resetCount(props.id)}>Reset</button>
            <button hidden={btnHidden} onClick={deleteCount}>Delete</button>

        </div>
    );
}

export default Counter;
