

import * as redux from "redux"
import todoReducers from "./Reducers/reducers"
import { noteReducers } from "./Reducers/notereducers";
import { combineReducers } from "redux";
const result=combineReducers({
    todoReducers,
    noteReducers
})
export const store=redux.createStore(result);
