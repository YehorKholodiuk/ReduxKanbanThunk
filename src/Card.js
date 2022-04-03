import React from 'react';

const Card = (props) => {
    const {name,id,description,status,priority} = props.task
    return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                    <p>{priority} </p>
                    <button type="button" className="btn btn-outline-secondary btn-sm"> left</button>

                    <button type="button" className="btn btn-outline-secondary btn-sm">right </button>
                </div>
            </div>

    );
};

export default Card;
