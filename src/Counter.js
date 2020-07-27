import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const deletBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>);

const resetBtn = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-counterclockwise" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"/>
        <path fillRule="evenodd"
              d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"/>
    </svg>);


function Counter(props) {

    const [btnHidden, setbtnHidden] = useState(false);

    const deleteCount = () => {
        props.deleteCount(props.id);
        setbtnHidden(true);
    }

    return (

        <div className="Counter">
            <button className="btn btn-outline-secondary btn-sm" hidden={btnHidden}
                    onClick={() => props.decreaseCount(props.id)}>-
            </button>
            <span className="count">{props.count}</span>
            <button className="btn btn-outline-secondary btn-sm" hidden={btnHidden}
                    onClick={() => props.increaseCount(props.id)}>+
            </button>
            <button className="btn btn-outline-info btn-sm" hidden={btnHidden}
                    onClick={() => props.resetCount(props.id)}>{resetBtn}</button>
            <button className="btn btn-outline-info btn-sm" hidden={btnHidden} onClick={deleteCount}>{deletBtn}</button>

        </div>
    );
}

export default Counter;
