import logo from './logo.svg';


//import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css'
function App(props) {
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

export default connect (mapStateToProps) (App);



