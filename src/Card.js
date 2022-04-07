import React from 'react';
import {changeStatus} from "./redux/actions";
import {connect} from "react-redux";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const Card = (props) => {
    const {name,_id,description,status,priority} = props.task
    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                <p>{priority} </p>
                <button type="button" className="btn btn-outline-secondary btn-sm"
                        disabled = {props.task.status === props.statuses[0].title}
                        onClick = {()=> props.changeStatus(props.task,props.statuses,-1)}
                > left</button>

                <button type="button" className="btn btn-outline-secondary btn-sm"
                        disabled = {props.task.status === props.statuses[props.statuses.length - 1].title}
                        onClick = {()=> props.changeStatus(props.task,props.statuses,+1)}
                >right </button>

                <button type="button" className="btn-outline-danger btn-sm" onClick={props.toggle}>DELETE</button>
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    statuses:state.statuses
})

const mapDispatchToProps = dispatch => ({
    changeStatus:(card,statuses,direction) => dispatch(changeStatus(card,statuses,direction))
})

export default connect(mapStateToProps,mapDispatchToProps) (Card);


