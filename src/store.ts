import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware} from 'connected-react-router';
import { history } from './history'
import applicationReducer from './app/reducer';
import aboutReducer from "./pages/main/sections/about/reducer";

const logger = createLogger({
  collapsed: true
});

const rootReducer =  combineReducers({
  router: connectRouter(history),
  applicationReducer,
  aboutReducer
});

const routerMiddle = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddle, thunk, logger),
);

export default store;


type TypeRootReducer = typeof rootReducer;
export type AppStateType = ReturnType<TypeRootReducer>;

export type InferActionsTypes<T> = T extends { [keys: string]: infer U } ? U : never;

