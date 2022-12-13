import { createStore,applyMiddleware,compose, combineReducers } from "redux";
import { GetProducts } from "../reducers/GetProducts";
import { UserLoginReducers } from "../reducers/UserLoginReducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const mainReducers = combineReducers({
    productData:GetProducts,
    loginData : UserLoginReducers
})
const store = createStore(
    mainReducers,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;