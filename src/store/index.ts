import { legacy_createStore as createStore, combineReducers } from "redux";

import listReducer from "./modules/listResponse/reducer";

const reducers = combineReducers({listResponse: listReducer})

const store = createStore(reducers)

export default store