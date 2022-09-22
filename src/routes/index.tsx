import { Route, Switch } from "react-router-dom"
import Details from "../pages/details"
import Home from "../pages/home"



const Routers = () =>{
    return(
        <Switch>          
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/details/:videoId">
                <Details/>
            </Route>

        </Switch>
    )
}

export default Routers