import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Counters from '../Counters/Counters';


const Counter = (props) => {

    return (
        <div className='counter_container'>
            <Button className='reset_btn' variant="primary">Reset</Button>
            {
                props.arr.map(ct => <Counters handleDelete={props.handleDelete} incrementHandle={props.incrementHandle} count={ct}></Counters>)
            }
        </div>
    );
};

export default Counter;