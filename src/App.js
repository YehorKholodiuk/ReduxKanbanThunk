import logo from './logo.svg';


//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react";
import {getCards, getStatuses} from "./redux/actions";
//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
function App(props) {
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
            <div className="row align-items-start">

        {props.statuses.map(el => <Columns key={el.id} status={el}/>)}
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



