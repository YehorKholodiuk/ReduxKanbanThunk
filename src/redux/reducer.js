import React from 'react'

const initialState = {
statuses:[
    {
        id:'1',
        title:'todo'

    }, {
       id: '2',
        title: 'progress'
    }, {
        id:'3',
        title:'review'
    }, {
       id:'4',
        title:'done'
    }
],
    tasks:[
        {name:'task 1' ,id:111 ,description:'do kanban',status:'todo' ,priority: 1},
        {name:'task 2' ,id:121 ,description:'do list',status:'progress' ,priority: 2},
        {name:'task 3' ,id:131 ,description:'do homework',status:'review' ,priority: 3},
        {name:'task 4' ,id:141 ,description:'do articles',status:'review' ,priority: 4},
        {name:'task 5' ,id:151 ,description:'buy Breitling',status:'done' ,priority: 5},
    ],

 priority:[1,2,3,4,5,6,7,8,9,10]
};


const Reducer = (state = initialState,action) => {
switch(action.type){
    case
    'GET_STATUSES':
        return {...state}
    default:
        return state;
}

};
export default Reducer;

