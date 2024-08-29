import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Button } from 'react-bootstrap';

const Counters = (props) => {

    const { id, value } = props.count;


    return (
        <div className='counters_container'>
            <div className='col_count me-auto'>
                {
                    value === 0 && <p id='value' className='btn_value'>Zero</p>
                }
                {
                    value !== 0 && <p id='value' className='btn_primary'>{value}</p>
                }
                <Button onClick={() => props.incrementHandle(props.count)} className='btn' variant="secondary">Increment</Button>
                <Button onClick={() => props.handleDelete(id)} className='btn delete_btn' variant="danger">Delete</Button>
            </div>
        </div >
    );
};



export default Counters;