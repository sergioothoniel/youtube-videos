import { Route, Switch } from "react-router-dom"
import Home from "../pages/home"



const Routers = () =>{
    return(
        <Switch>          
            <Route exact path="/">
                <Home/>
            </Route>

        </Switch>
    )
}

export default Routers