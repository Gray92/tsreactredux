import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer
});


//Для хука useTypedSelector
export type RootState = ReturnType<typeof rootReducer>