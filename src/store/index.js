import { combineReducers, createStore } from "redux";
import { articlesReducer } from "./reducers/articleReducers";
import { themeReducer } from "./reducers/themeReducer";


const rootReducers = combineReducers({
    articles: articlesReducer,
    theme: themeReducer
})


const store = createStore(rootReducers)

export default store