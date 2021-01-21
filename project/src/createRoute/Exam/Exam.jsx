import React, { Component } from 'react'
import * as act from './action'
import {connect} from 'react-redux'

class Exam extends Component {
    eventHandler= ()=>{
        document.getElementById('h1').innerHTML = this.props.total
        let advice = document.getElementById('advice')
        if(this.props.total >= 1.5)
        {
            advice.innerHTML = 'Congratulation! You Passed the Exam.';
            advice.style.color = 'green'
        }
        else{
            advice.innerHTML = 'Unfortunetly You Have To Try Again!'
            advice.style.color = 'red'
        }
        document.getElementById('final').disabled = true;
        this.props.dispatch({type:act.DIC,thisMark:0})
    }

    Q1 = () =>{
        document.getElementById('Q1').disabled = true
        document.getElementById('Q1').style.backgroundColor = 'rgb(54, 168, 168)'
        if(document.getElementById('a').checked) {this.props.dispatch({type:act.INC,thisMark:1})}
    }
    Q2 = () =>{
        document.getElementById('Q2').disabled = true
        document.getElementById('Q2').style.backgroundColor = 'rgb(54, 168, 168)'
        if(document.getElementById('b').checked) {this.props.dispatch({type:act.INC,thisMark:1.5})}
    }
    Q3 = () =>{
        document.getElementById('Q3').disabled = true
        document.getElementById('Q3').style.backgroundColor = 'rgb(54, 168, 168)'
        if(document.getElementById('c').checked) {this.props.dispatch({type:act.INC,thisMark:1.25})}
    }
    render(){
        return(
            <div style={{backgroundColor:'darkgray',width:'300px',paddingLeft:'24px'}}>
                <span style={{color:'darkslategray'}}>find X => (1 point)</span><br/><span style={{color:'darkslategray'}}> 3x + 3 = 12</span><br/><br/>
                1) x = 4<input type="radio" name='first' id='a1'/><br/>
                2) x = 3<input type="radio" name='first' id='a'/><br/>
                3) x = 2<input type="radio" name='first' id='a3'/><br/>
                4) x = 1<input type="radio" name='first' id='a4'/><br/>
                <input type='submit' id='Q1'onClick={this.Q1} style={{backgroundColor:'darkslategray',cursor:'pointer',color:'white',borderRadius:'10px'}}/>
                <hr/>
                <span style={{color:'darkslategray'}}>find Y => (1.5 point)</span><br/><span style={{color:'darkslategray'}}> y + 15 = 3y + 5</span><br/><br/>
                1) y = 0<input type="radio" name='second' id='b1'/><br/>
                2) y = 2.5<input type="radio" name='second' id='b2'/><br/>
                3) y = 5<input type="radio" name='second' id='b'/><br/>
                4) y = 7.5<input type="radio" name='second' id='b4'/><br/>
                <input type='submit' id='Q2'onClick={this.Q2} style={{backgroundColor:'darkslategray',cursor:'pointer',color:'white',borderRadius:'10px'}}/>
                <hr/>
                <span style={{color:'darkslategray'}}>find Z => (1.25 point)</span><br/><span style={{color:'darkslategray'}}> x<sup>2</sup> + 3z + 16 = x<sup>2</sup> + z</span><br/><br/>
                1) z = -8<input type="radio" name='third' id='c'/><br/>
                2) z = 8<input type="radio" name='third' id='c2'/><br/>
                3) z = -4<input type="radio" name='third' id='c3'/><br/>
                4) z = 4<input type="radio" name='third' id='c4'/><br/>
                <input type='submit' id='Q3'onClick={this.Q3} style={{backgroundColor:'darkslategray',cursor:'pointer',color:'white',borderRadius:'10px'}}/>
                <hr/>
                <input type='submit' id='final' value='show the mark' onClick={this.eventHandler} style={{backgroundColor:'darkslategray',cursor:'pointer',color:'white',borderRadius:'10px'}}/>
                <h1 id='h1'>Your Mark :</h1>
                <p id='advice'></p>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const total = state.total
    return {total}
}
export default connect(mapStateToProps)(Exam)