import logo from './logo.svg';


//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from "react";
import {getCards, getStatuses} from "./redux/actions";
import CreateModal from "./CreateModal";
import {Button} from "reactstrap";
//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
function App(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalType,setModalType] = useState('')
    const toggle = (typeMo, task) =>{
        setModalType(typeMo)
        setIsOpen(!isOpen)
    }
    useEffect(
        () => {props.getStatuses()}, []
    )
    useEffect(
        () =>{props.getCards()
        },[]
    )
  return (

        <div className="container">
      <h1>Kanban Redux</h1>

            <Button
                color="danger"
                onClick={() => toggle('create')}
            >
                Click Me
            </Button>
            {isOpen && <CreateModal isOpen={isOpen} toggle={toggle} modalType={modalType}/>}
            <div className="row align-items-start">

        {props.statuses.map(el => <Columns key={el.id}
                                           status={el}
                                           //isOpen={isOpen}
                                           toggle={toggle}
        />)}
            </div>
        </div>

  );
}


const mapStateToProps = state => ({
    statuses: state.statuses,
});
const mapDispatchToProps = (dispatch) => ({
getStatuses: () => dispatch(getStatuses()),
    getCards: () => dispatch (getCards())
})

export default connect (mapStateToProps, mapDispatchToProps) (App);



