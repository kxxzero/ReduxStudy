import {configureStore} from "@testing-library/react";
import thunk from 'redux-thunk' // 미들웨어 / 비동기 방식
import {rootReducer} from "../reducers/index";
import {create} from "axios";
import {createLogger} from "redux-logger/src";

const logger=createLogger()
const middleware=[thunk, logger]
const store=configureStore({
    reducer:rootReducer,
/*    middleware:middleware,*/
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store