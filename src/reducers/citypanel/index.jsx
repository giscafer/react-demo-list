
import { combineReducers } from 'redux'
import cityList from './cityList'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    cityList
})

export default rootReducer