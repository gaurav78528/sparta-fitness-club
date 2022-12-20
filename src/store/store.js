import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import { reducer as appReducer } from "./App/app.reducer";
import { reducer as authReducer } from "./Auth/auth.reducer";
import {workoutReducer} from "../pages/Workouts/REDUX/workout.reducer"
import thunk from "redux-thunk";
import { mealReducer, pilotReducer, productReducer } from "./workout/work.reducers";
import { reducer as giftReducer } from "./shop/reducer";
import {reducer as cartReducer} from "./Cart/reducer"
const root_reducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  gift: giftReducer,
  // product: productReducer,
  prod: productReducer,
  workout:workoutReducer,
  Product:cartReducer,
  meal:mealReducer,
  pilot:pilotReducer,
});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
