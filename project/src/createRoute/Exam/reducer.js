import * as actions from './action'

const reducer = (state = {total:0} , action) =>{
    switch(action.type){
    case(actions.INC):
    return{
        ...state,
        total : state.total + action.thisMark
    }
    case(actions.DIC):
    return{
        ...state,
        total : action.thisMark
    }
    default: return state
}
    
}

export default reducer