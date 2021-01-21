import * as act from './action'
import update from 'react-addons-update'
const initialState ={
    product:[ 
        {name:'Soda',amount:0,id:0,exist:0},
        {name:'Salad',amount:0,id:1,exist:0},
        {name:'Pizza',amount:0,id:2,exist:0},
        {name:'Peperoni',amount:0,id:3,exist:0},
        {name:'Sandwich',amount:0,id:4,exist:0},
        {name:'Hot Dog',amount:0,id:5,exist:0},
        {name:'Humbergur',amount:0,id:6,exist:0}
    ],
    arr:[]
    //arr:['Soda','Salad','Pizza','Peperoni','Sandwich','Hot Dog','Humbergur']
}
const reducer = (state = initialState , action)=>{
     switch(action.type){
         case(act.IS):
         return update(state,{
             product:{
                 [action.id]:{
                    amount : {$set : state.product[action.id].amount + 1}
                 }
             }
         })
         case(act.DS):
         return update(state,{
             product:{
                 [action.id]:{
                     amount : {$set: state.product[action.id].amount - 1}
                 }
             }
         })
         case(act.RS):
         return update(state,{
             product:{
                 [action.id]:{
                     exist: {$set : 1}
                 }
             }
         })
         case(act.US):
         return update(state,{
             product:{
                 [action.id]:{
                     exist:{$set : 0}
                 }
             }
         })
         case(act.AA):
            return update(state,{
                arr:{
                    [action.id]:{
                       $set :  action.name + ' : '+  action.amount
                    }
                }
            })
            case(act.RA):
                return update(state,{
                    arr:{
                        [action.id]:{
                            $set : undefined
                        }
                    }
                })
         default :
          return state
     }
 }

 export default reducer