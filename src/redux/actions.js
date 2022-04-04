import axios from "axios"
export function getStatuses() {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(res => {dispatch({type:'GET_STATUSES', payload:res.data})})
            .catch(err => console.log('error'))
    }
};

export function getCards(){
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {dispatch({type:'GET_CARDS', payload:res.data})})
            .catch(err => console.log('error'))
    }
};


