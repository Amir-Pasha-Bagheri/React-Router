import React, { Component } from 'react'
import './calculator.css'

class Smllcounter extends Component {
    constructor(){
        super()
        this.state={
            value1:'',
            operate:'',
            value2:''
        }
    }

    
    handleValue=(e)=>{ //add the new numbers to the lasts
        document.getElementById('inputNumber').value += e.target.value 
        if(document.getElementById('answer').innerHTML !==''){
            document.getElementById('answer').innerHTML =''
            this.setState({value2:''})
            this.setState({value1:''})
            this.setState({operate:''})
        }
    }
    firstOperate=(e)=>{ //put the entered numbers in state fot FIRST time
        switch(e.target.value){
            case '+': this.setState({operate: '+'}) 
            break;
            case '-': this.setState({operate: '-'}) 
            break;
            case '*': this.setState({operate: '*'}) 
            break;
            case '/': this.setState({operate: '/'}) 
            break;
            default: return false
        }
        if(this.state.value1 === ''){
            this.setState({value1:document.getElementById('inputNumber').value + ' ' })
            document.getElementById('inputNumber').value = ''
        }
    }
    secondEqual=()=>{ //mouseover
        if(document.getElementById('inputNumber').value !== '' && this.state.value1!==''){
            this.setState({value2:document.getElementById('inputNumber').value + ' '})
            document.getElementById('inputNumber').value = ''
        }
        else{
            return false
        }
        
    }
    equal=()=>{  //by press equal
        
        let val1 = Number.parseFloat(this.state.value1)
        let val2 = Number.parseFloat(this.state.value2)
        
        switch(this.state.operate){
            case '+': 
            document.getElementById('answer').innerHTML = val1 + val2
            break;
            case '-': 
            document.getElementById('answer').innerHTML = val1 - val2 
            break;
            case '/': 
            document.getElementById('answer').innerHTML = val1 / val2 
            break;
            case '*': 
            document.getElementById('answer').innerHTML = val1 * val2 
            break;
            default: return false
        }
    } 
    handleRestart=()=>{ //restart button
        this.setState({value1:''})
        this.setState({operate:''})
        this.setState({value2:''})
        document.getElementById('answer').innerHTML = ''
    }
    render(){
        let showTheFirst = <span>{this.state.value1}</span>
        let showOpertate = <span>{this.state.operate}</span>
        let showTheRest = <span>{this.state.value2}</span>
        return(
            <React.Fragment>
            <div align='center' className='reasultBox'>   
                <div className='resultShow'> 
                    {showTheFirst} {showOpertate} {showTheRest}
                    <div id='answer'></div>
                </div>
                <input type='text' id='inputNumber'readOnly/>
            </div>
            <table align='center'>
                <tr>
                    <td><input type='button' value='AC' onClick={this.handleRestart}/></td>
                    <td><input type='button' value='' onClick={this.firstOperate} disabled/></td>
                    <td><input type='button' value='/' onClick={this.firstOperate}/></td>
                    <td><input type='button' value='=' onClick={this.equal} onMouseOver={this.secondEqual} /></td>
                </tr>
                <tr>
                    <td><input type='button' value='7' onClick={this.handleValue}/></td>
                    <td><input type='button' value='8' onClick={this.handleValue} /></td>
                    <td><input type='button' value='9' onClick={this.handleValue}/></td>
                    <td><input type='button' value='+' onClick={this.firstOperate}/></td>
                </tr>
                <tr>
                    <td><input type='button' value='4' onClick={this.handleValue}/></td>
                    <td><input type='button' value='5' onClick={this.handleValue}/></td>
                    <td><input type='button' value='6' onClick={this.handleValue}/></td>
                    <td><input type='button' value='-' onClick={this.firstOperate}/></td>
                </tr>
                <tr>
                    <td><input type='button' value='1' onClick={this.handleValue}/></td>
                    <td><input type='button' value='2' onClick={this.handleValue}/></td>
                    <td><input type='button' value='3' onClick={this.handleValue}/></td>
                    <td><input type='button' value='*' onClick={this.firstOperate}/></td>
                </tr>
                <tr>
                    <td><input type='button' value='0' onClick={this.handleValue}/></td>
                    <td><input type='button' value='.' onClick={this.handleValue}/></td>
                    
                </tr>
            </table>
        </React.Fragment>
    )
}
}

export default Smllcounter;