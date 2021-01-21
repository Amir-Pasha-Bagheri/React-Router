import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as act from './action'
import './mainShopping.css'
class Shopping extends Component{

    componentDidUpdate() { // for updating the UI
        let j
        let TrueORFalse = 0
        for(j=0;j<this.props.status.product.length ;++j){
            if(this.props.status.product[j].exist === 1){
                TrueORFalse += this.props.status.product[j].exist
            }
        }
        document.getElementById('total1').innerHTML = TrueORFalse 
        if(TrueORFalse === 0){
            document.getElementById('total1').innerHTML = ''
            document.getElementById('total1').style.backgroundColor = ' blanchedalmond'
        }
        else {document.getElementById('cart').style.backgroundColor = 'darkcyan'
             document.getElementById('total1').style.backgroundColor = 'goldenrod'
        }
        
    }
    render(){
        const handleIS = (a) =>{ // increase the number
            this.props.dispatch({type:act.IS,id:a.id})
            this.props.dispatch({type:act.RS,id:a.id})
            this.props.dispatch({type:act.AA,id:a.id,name:a.name,amount:a.amount + 1})
            let i
            let result = 1
            for(i=0;i<this.props.status.product.length ;i++){
                result += this.props.status.product[i].amount
            }
            
            document.getElementById('total2').innerHTML = 'Total Products : ' + result
        }
        
        
        const handleDS = (a)=>{ //decrease the number
            if(a.amount !== 0 && a.amount >=2 ){
                this.props.dispatch({type:act.AA,id:a.id,name:a.name,amount:a.amount - 1})
                this.props.dispatch({type:act.DS,id:a.id})
                let i
                let result = -1
                for(i=0;i<this.props.status.product.length ;i++){
                    result += this.props.status.product[i].amount
                }
                document.getElementById('total2').innerHTML = 'Total Products : ' + result}

            else if(a.amount === 1){
                this.props.dispatch({type:act.AA,id:a.id,name:a.name,amount:a.amount -1})
                this.props.dispatch({type:act.RA,id:a.id})
                this.props.dispatch({type:act.US,id:a.id})
                this.props.dispatch({type:act.DS,id:a.id})
                let i
                let result = -1
                for(i=0;i<this.props.status.product.length ;i++){
                    result += this.props.status.product[i].amount
                }
                document.getElementById('total2').innerHTML = 'Total Products : ' + result
                }
               // <h1 id="total1">Type of Products : 0</h1>
            }

        return(
            <React.Fragment>
                <p className='pShopping'> Your Cart</p><p className='pShopping' id='total1' >{}</p>
                <ul id="cart">{this.props.status.arr.map((x , index)=><li key={index}>{x}</li>)}</ul>
                <h2 id='total2'>Total Products : 0</h2>
                {this.props.status.product.map((a,index)=>{return (
                    <div key={index} className='divShopping'>
                    <p >{a.name}</p>
                    <input className='inputShopping' type='button' value='ADD' onClick={()=>handleIS(a)} />
                    <input className='inputShopping' type='button' value='REMOVE' onClick={()=>handleDS(a)} id='Remove'/>
                    </div>
                )})}
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    const status = state
    return {status}
}

export default connect(mapStateToProps)(Shopping)