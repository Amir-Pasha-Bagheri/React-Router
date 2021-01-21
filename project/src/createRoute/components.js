import './route.css'
import {Link} from 'react-router-dom'
import Smllcounter from './../createRoute/Calculate/calculator'
import Exam from './Exam/Exam'
import storeExam from './Exam/store'
import Shopping from './Shopping/mainShopping'
import storeShopping from './Shopping/store'
import {Provider} from 'react-redux'

const homePage =()=>{
    return(
        <div>
            <div className='div'>
                <h1 className='h1'>Calculator</h1>
                <Link to='/Calculator'><button>TRY IT !</button></Link>
                <p className='p'>This is a simple calculator which made by React.js</p>
            </div>
            <div className='div'>
                <h1 className='h1'>Exam</h1>
                <Link to='/Exam'><button>TRY IT !</button></Link>
                <p className='p'>This is simple exam which made by React.js and Redux</p>
            </div>
            <div className='div'>
                <h1 className='h1'>Shopping Cart</h1>
                <Link to='/ShoppingCart'><button>TRY IT !</button></Link>
                <p className='p'>This is only my js code and there is no CSS and appearance is so simple, written by Redux and React.js</p>
            </div>
        </div>
    )
}
const notFound =props=>{
    return(
        <div className='div'>
            <h1>404 NOT FOUND!</h1>
            <button id='not-found' onClick={()=>props.history.push('/')}>Go Home!</button>
        </div>
    )
}

const calculator = props =>{
    return(
        <div>
            <Smllcounter/>
            <hr/>
            <br/>
            <button onClick={()=>props.history.push('/')} style={{float:'left'}}>Go Home!</button>
        </div>
    )
}

const exam = props =>{
    return(
        <div>
            <Provider store={storeExam}>
                <Exam/>
            </Provider>
            <hr/>
            <br/>
            <button onClick={()=>props.history.push('/')} style={{float:'left'}}>Go Home!</button>
        </div>
    )
}

const shopping = props =>{
    return(
        <div>
            <Provider store={storeShopping}>
                <Shopping/>
            </Provider>
            <hr/>
            <br/>
            <button onClick={()=>props.history.push('/')} style={{float:'left'}}>Go Home!</button>
        </div>
    )
}
export {
    homePage,
    notFound,
    calculator,
    exam,
    shopping
}