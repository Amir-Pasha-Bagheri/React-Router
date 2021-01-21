import {Route , Switch} from 'react-router-dom'
import * as com from './components'

const Routes = () =>{
    return(
        <div>
            <div style={{backgroundColor:' rgba(27, 73, 38, 0.753)',textAlign:'center',height: '59px',fontSize: '24px',marginTop: '5px',paddingTop: '17px',color: 'rgb(212, 226, 226)'}}> Welcome To My Tiny Project</div>
            <Switch>
                <Route exact path='/' component={com.homePage}/>
                <Route path='/Calculator' component={com.calculator}/>
                <Route path='/Exam' component={com.exam}/>
                <Route path='/ShoppingCart' component={com.shopping}/>
                <Route component={com.notFound}/>
            </Switch>
        </div>
    )
}

export default Routes