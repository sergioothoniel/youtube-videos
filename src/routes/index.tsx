import { Route, Switch } from "react-router-dom"
import Home from "../pages/home"



const Routers = () =>{
    return(
        <Switch>          
            <Route path="/">
                <Home/>
            </Route>

        </Switch>
    )
}

export default Routers